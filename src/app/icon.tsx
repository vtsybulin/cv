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
        fontSize: 24,
        background: '#09090b',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        borderRadius: '100%',
      }}
    >
      &#128406;
    </div>
  ),
  {
    ...size,
  },
);

export default Icon;
