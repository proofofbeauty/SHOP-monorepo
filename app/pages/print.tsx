import React, { FC, useMemo } from 'react';
import { NextPage } from 'next';
import { ContentWrapper, MainContent } from '../components/content';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import {
  Split,
  LeftSide,
  RightSide,
  RightSection,
  SectionBody,
} from '../components/checkout';
import { PrintCheckout } from '../components/checkout/print/form';
import { useCheckoutStore } from '../stores/checkout';
import { TRADE_LONDON_LINK, PRINT_SERVICE_BLOG_POST } from '../constants';

const PrintPage: NextPage = () => {
  return (
    <>
      <ContentWrapper>
        <Header />
        <MainContent>
          <Split>
            <LeftSide>
              <Photos />
            </LeftSide>
            <RightSide>
              <PrintHero />
              <PrintCheckout />
              <PrintDetails />
            </RightSide>
          </Split>
        </MainContent>
        <Footer />
      </ContentWrapper>
    </>
  );
};
export default React.memo(PrintPage);

const PrintHero: FC = () => (
  <RightSection>
    <SectionBody style={{ paddingTop: 32 }}>
      <h1>Print Service</h1>
      <br />
      <p>
        Select any Proof of Beauty artwork you own to print. All prints require
        $LONDON or ETH to purchase. Enter your Contact Info and Shipping Address
        correctly to ensure delivery.
        <br />
        <br />
        Free International Shipping •{' '}
        <a href={TRADE_LONDON_LINK} target="_blank" rel="noopener noreferrer">
          Get $LONDON
        </a>{' '}
        •{' '}
        <a
          href={PRINT_SERVICE_BLOG_POST}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </p>
    </SectionBody>
  </RightSection>
);

const PrintDetails: FC = () => (
  <RightSection>
    <SectionBody>
      <h4>Product Details</h4>
      <br />
      <p>
        All prints are done on Hahnemühle Photo Rag 308g paper with
        archival-grade ink. Printed via a fine art 74 inch wide Roland Hi-Fi Jet
        Pro II. All orders also receive an official POB Providence Certificate,
        8 in x 8 in.
        <br />
        <br />
        Framing Option: All framing is custom, handcrafted black metal with
        plexiglass covering the print. 1 inch wide x 1 inch deep.
        <br />
        <br />
      </p>
      <figure>
        <figcaption> HASH Prints</figcaption>
        <ul>
          <li>
            Resolution: 6000px x 9600px. ( Art may vary slightly due to
            resolution increase )
          </li>
          <li>Print Sizing: 18 in x 24 in ( 45.72 cm x 60.96 cm )</li>
          <li>Framed Size: 20 in x 26 in ( 50.8 cm x 66.04 cm )</li>
          <li>
            Photo Info:{' '}
            <a
              href={`https://hash.pob.studio/art/0xbdab447ba2fd0a493d93635da202ebcfaa309bcc6a22a95d808c93ce8f1c6c2d`}
              target="_blank"
              rel="noopener noreferrer"
            >
              "ZRX Genesis"
            </a>
          </li>
        </ul>
      </figure>
      <br />
      <figure>
        <figcaption> LONDON GIFT Prints</figcaption>
        <ul>
          <li>Resolution: 6144px x 6144px</li>
          <li>Print Sizing: 24 in x 24 in ( 60.96 cm x 60.96 cm )</li>
          <li>Framed Size: 26 in x 26 in ( 66.04 cm x 66.04 cm )</li>
          <li>
            Photo Info:{' '}
            <a
              href={`https://opensea.io/assets/0x7645eec8bb51862a5aa855c40971b2877dae81af/8776`}
              target="_blank"
              rel="noopener noreferrer"
            >
              "new touted verdant sky"
            </a>
          </li>
        </ul>
      </figure>
      <br />
      <p>
        Printing via{' '}
        <a
          href="https://twitter.com/gallery16"
          target="_blank"
          rel="noopener noreferrer"
        >
          @gallery16
        </a>
        {' / '}
        <a
          href="https://www.urbandigitalcolor.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @UDC
        </a>
        {/* {'. '}
        Framing via{' '}
        <a
          href="https://twitter.com/gallery16"
          target="_blank"
          rel="noopener noreferrer"
        >
          @gallery16
        </a> */}
      </p>
    </SectionBody>
  </RightSection>
);

const LondonPhotos: FC = () => (
  <>
    <img src="/imgs/gallery16/london/frame-1.jpg" />
    <img src="/imgs/gallery16/london/frame-2.jpg" />
    <img src="/imgs/gallery16/london/frame-3.jpg" />
    <img src="/imgs/gallery16/london/certificate.jpg" />
  </>
);

const HashPhotos: FC = () => (
  <>
    <img src="/imgs/gallery16/hash/frame-1.jpg" />
    <img src="/imgs/gallery16/hash/frame-2.jpg" />
    <img src="/imgs/gallery16/hash/frame-3.jpg" />
    <img src="/imgs/gallery16/hash/frame-4.jpg" />
    <img src="/imgs/gallery16/hash/certificate.jpg" />
  </>
);

const Photos: FC = () => {
  const collection = useCheckoutStore((s) => s.collection);
  switch (true) {
    case collection.includes('london'):
      return <LondonPhotos />;
    case collection.includes('hash'):
      return <HashPhotos />;
    default:
      return <LondonPhotos />;
  }
};
