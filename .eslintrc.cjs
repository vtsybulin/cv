module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": false
      }
    },
    "tailwindcss": {
      // These are the default values but feel free to customize
      "callees": ["twMerge", "classnames", "ctl"],
      "config": "tailwind.config.ts",
      "cssFiles": [
        "**/*.css",
        "!**/node_modules",
        "!**/.*",
        "!**/dist",
        "!**/build",
      ],
      "removeDuplicates": true,
      "classRegex": "^.*(c|C)lass(Name)?$", // can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
    },
  },
  "plugins": [
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "react",
    "react-hooks"
  ],
  "ignorePatterns": [
    "!**/*",
    "*.js",
    "*.scss",
    "dist"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:tailwindcss/recommended",
    "plugin:@next/next/recommended",
  ],
  "rules": {
    "eol-last": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "operator-linebreak": ["error", "before"],
    "no-console": [
      "warn",
      {
        "allow": [
          "warn",
          "info",
          "error"
        ]
      }
    ],
    "no-param-reassign": "error",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "multiline-ternary": ["error", "always-multiline"],
    "newline-per-chained-call": "error",
    "curly": "error",
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "yoda": "error",
    "brace-style": "error",
    "object-property-newline": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxBOF": 0
      }
    ],
    "prefer-template": "error",
    "padded-blocks": [
      "error",
      "never"
    ],
    "newline-before-return": "warn",
    "@typescript-eslint/semi": "error",
    "no-extra-semi": "error",
    "max-lines": [
      "error",
      {
        "max": 170,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-len": [
      "error",
      {
        "code": 120,
        "ignorePattern": "((const \\w+ = (<.+>)?\\((\\{)?.+(\\})?: .+\\):)|(texts\\..+))",
        "ignoreStrings": true,
        "ignoreComments": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
    "key-spacing": "error",
    "comma-spacing": "error",
    "keyword-spacing": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "minProperties": 1
        }
      }
    ],
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "multiline"],
    "func-call-spacing": ["error", "never"],
    "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "block-like",
        "next": "*"
      },
      {
        "blankLine": "always",
        "prev": "const",
        "next": "block-like"
      }
    ],
    "import/default": "off",
    "import/newline-after-import": "warn",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        "groups": [
          "external",
          "builtin",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "pathGroups": [
          {
            "pattern": "^*",
            "group": "internal"
          },
          {
            "pattern": "^*/**/*",
            "group": "internal"
          }
        ]
      }
    ],
    "import/no-unresolved": [
      "error",
      {
        "ignore": [
          ".scss",
          "swiper/css/*"
        ]
      }
    ],
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowTypedFunctionExpressions": false
      }
    ],
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        "ignoreVoid": true
      }
    ],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/typedef": [
      "error",
      {
        "arrowParameter": true,
        "parameter": true,
        "propertyDeclaration": true,
        "memberVariableDeclaration": false
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": [
          "PascalCase"
        ],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      },{
        "selector": ["variable", "parameter", "typeProperty"],
        "format": [
          "camelCase",
          "UPPER_CASE"
        ],
        "custom": {
          "regex": "^((is|are|has|have|with|should)[A-Z]([A-Za-z0-9]?)+)|((IS|ARE|HAS|HAVE|WITH|SHOULD)[A-Z_]+)",
          match: true,
        },
        "types": ["boolean"],
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": "error",
    "react/boolean-prop-naming": [
      "error",
      {
        "rule": "^(is|are|has|have|with|should)[A-Z]([A-Za-z0-9]?)+"
      }
    ],
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-first-prop-new-line": [
      "error",
      "multiline"
    ],
    "react/jsx-max-props-per-line": [
      "error",
      {
        "maximum": 1
      }
    ],
    "react/jsx-curly-spacing": [
      "error",
      {
        "when": "never"
      }
    ],
    "react/jsx-equals-spacing": [
      "error",
      "never"
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".tsx"
        ]
      }
    ],
    "react/jsx-fragments": [
      "error",
      "syntax"
    ],
    "react/jsx-key": "error",
    "react/jsx-newline": "error",
    "react/jsx-no-literals": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-one-expression-per-line": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-tag-spacing": [
      "error",
      {
        "beforeClosing": "never"
      }
    ],
    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "parens-new-line",
        "prop": "parens-new-line"
      }
    ],
    "react/destructuring-assignment": [
      "error",
      "always"
    ],
    "react/no-multi-comp": ["error"],
    "react/self-closing-comp": ["error"],
    "react/jsx-boolean-value": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-curly-newline": [
      "error",
      "consistent"
    ],
    "dot-location": [
      "warn",
      "property"
    ],
    "eqeqeq": "error",
    "new-parens": "warn",
    "no-caller": "warn",
    "no-cond-assign": [
      "warn",
      "except-parens"
    ],
    "no-const-assign": "warn",
    "no-control-regex": "warn",
    "no-delete-var": "warn",
    "no-dupe-args": "warn",
    "no-dupe-keys": "warn",
    "no-duplicate-case": "warn",
    "no-empty-character-class": "warn",
    "no-empty-pattern": "warn",
    "no-eval": "warn",
    "no-ex-assign": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-extra-label": "warn",
    "no-fallthrough": "warn",
    "no-func-assign": "warn",
    "no-implied-eval": "warn",
    "no-invalid-regexp": "warn",
    "no-iterator": "warn",
    "no-label-var": "warn",
    "no-labels": [
      "warn",
      {
        "allowLoop": true,
        "allowSwitch": false
      }
    ],
    "no-lone-blocks": "warn",
    "no-loop-func": "warn",
    "no-mixed-operators": [
      "warn",
      {
        "groups": [
          [
            "&",
            "|",
            "^",
            "~",
            "<<",
            ">>",
            ">>>"
          ],
          [
            "==",
            "!=",
            "===",
            "!==",
            ">",
            ">=",
            "<",
            "<="
          ],
          [
            "&&",
            "||"
          ],
          [
            "in",
            "instanceof"
          ]
        ],
        "allowSamePrecedence": false
      }
    ],
    "no-multi-str": "warn",
    "no-native-reassign": "warn",
    "no-negated-in-lhs": "warn",
    "no-new-func": "warn",
    "no-new-object": "warn",
    "no-new-symbol": "warn",
    "no-new-wrappers": "warn",
    "no-obj-calls": "warn",
    "no-octal": "warn",
    "no-octal-escape": "warn",
    "no-redeclare": "warn",
    "no-regex-spaces": "warn",
    "no-restricted-syntax": [
      "warn",
      "WithStatement"
    ],
    "no-script-url": "warn",
    "no-self-assign": "warn",
    "no-self-compare": "warn",
    "no-sequences": "warn",
    "no-shadow-restricted-names": "warn",
    "no-sparse-arrays": "warn",
    "no-template-curly-in-string": "warn",
    "no-this-before-super": "warn",
    "no-throw-literal": "warn",
    "no-restricted-globals": [
      "error",
      "addEventListener",
      "blur",
      "close",
      "closed",
      "confirm",
      "defaultStatus",
      "defaultstatus",
      "event",
      "external",
      "find",
      "focus",
      "frameElement",
      "frames",
      "history",
      "innerHeight",
      "innerWidth",
      "length",
      "location",
      "locationbar",
      "menubar",
      "moveBy",
      "moveTo",
      "name",
      "onblur",
      "onerror",
      "onfocus",
      "onload",
      "onresize",
      "onunload",
      "open",
      "opener",
      "opera",
      "outerHeight",
      "outerWidth",
      "pageXOffset",
      "pageYOffset",
      "parent",
      "print",
      "removeEventListener",
      "resizeBy",
      "resizeTo",
      "screen",
      "screenLeft",
      "screenTop",
      "screenX",
      "screenY",
      "scroll",
      "scrollbars",
      "scrollBy",
      "scrollTo",
      "scrollX",
      "scrollY",
      "self",
      "status",
      "statusbar",
      "stop",
      "toolbar",
      "top"
    ],
    "no-unexpected-multiline": "warn",
    "no-unreachable": "warn",
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true,
        "allowTernary": true,
        "allowTaggedTemplates": true
      }
    ],
    "no-unused-labels": "warn",
    "no-useless-computed-key": "warn",
    "no-useless-concat": "warn",
    "no-useless-escape": "warn",
    "no-useless-rename": [
      "warn",
      {
        "ignoreDestructuring": false,
        "ignoreImport": false,
        "ignoreExport": false
      }
    ],
    "no-with": "warn",
    "no-whitespace-before-property": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "require-yield": "warn",
    "rest-spread-spacing": [
      "warn",
      "never"
    ],
    "strict": [
      "warn",
      "never"
    ],
    "unicode-bom": [
      "warn",
      "never"
    ],
    "use-isnan": "warn",
    "valid-typeof": "warn",
    "no-restricted-properties": [
      "error",
      {
        "object": "require",
        "property": "ensure",
        "message": "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting"
      },
      {
        "object": "System",
        "property": "import",
        "message": "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting"
      }
    ],
    "getter-return": "warn",
    "import/first": "error",
    "import/no-amd": "error",
    "import/no-webpack-loader-syntax": "error",
    "react/forbid-foreign-prop-types": [
      "warn",
      {
        "allowInPropTypes": true
      }
    ],
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-duplicate-props": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": [
      "warn",
      {
        "allowAllCaps": true,
        "ignore": []
      }
    ],
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
    "react/no-danger-with-children": "warn",
    "react/no-direct-mutation-state": "warn",
    "react/no-is-mounted": "warn",
    "react/no-typos": "error",
    "react/require-render-return": "error",
    "react/style-prop-object": "warn",
    "space-in-parens": [
      "error",
      "never"
    ],
    "array-bracket-newline": [
      "error",
      {
        "multiline": true
      }
    ],
    "array-element-newline": ["error", "consistent"],
    "jsx-a11y/accessible-emoji": "warn",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "aspects": [
          "noHref",
          "invalidHref"
        ]
      }
    ],
    "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-role": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/heading-has-content": "warn",
    "jsx-a11y/iframe-has-title": "warn",
    "jsx-a11y/img-redundant-alt": "warn",
    "jsx-a11y/no-access-key": "warn",
    "jsx-a11y/no-distracting-elements": "warn",
    "jsx-a11y/no-redundant-roles": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "jsx-a11y/scope": "warn",
    "react-hooks/rules-of-hooks": "error",
    "default-case": "off",
    "no-dupe-class-members": "off",
    "no-undef": "off",
    "@typescript-eslint/consistent-type-assertions": "warn",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "warn",
    "@typescript-eslint/no-namespace": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "warn",
      {
        "functions": false,
        "classes": false,
        "variables": false,
        "typedefs": false
      }
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "args": "none",
        "ignoreRestSiblings": true,
        "varsIgnorePattern": "^_unused$"
      }
    ],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "warn",
    "@typescript-eslint/ban-types": [
      "error",
      {
        "extendDefaults": true,
        "types": {
          "{}": false
        }
      }
    ],
  },
  "overrides": [
    {
      "files": [
        "*.test.*",
        "*.spec.*",
      ],
      "rules": {
        "max-lines": "off",
        "@typescript-eslint/naming-convention": "off",
      }
    }
  ]
}
