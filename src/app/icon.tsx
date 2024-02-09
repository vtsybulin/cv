/* eslint-disable react/jsx-no-literals,jsx-a11y/accessible-emoji */
import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

const Icon = (): ImageResponse => new ImageResponse(
  (
    <div
      style={{
        background: '#000000',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
      }}
    >
      <span
        style={{
          color: '#ffffff',
          fontSize: 16,
          fontWeight: 'bold',
        }}
      >
IT
      </span>
    </div>
  ),
  {
    ...size,
  },
);

export default Icon;
