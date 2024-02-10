import { CV_FILE_NAME } from '^/configs/common';

export const makeAnchorHref = (anchor: string): string => `#${anchor}`;

export const makeDownloadCVLink = (): string => `/${CV_FILE_NAME}`;

