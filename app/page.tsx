import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNjCFVSC8dtdn7Jhc1n39zskHoCiUc4Q2yzUGXupG3CdX/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'grit',
  description: 'A frame about grit',
  openGraph: {
    title: 'grit',
    description: 'A frame about grit',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmNjCFVSC8dtdn7Jhc1n39zskHoCiUc4Q2yzUGXupG3CdX/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>grit says gm</h1>
    </>
  );
}
