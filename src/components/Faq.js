import React, { forwardRef, useContext } from 'react';
import { Accordion, useAccordionButton, AccordionContext } from 'react-bootstrap'

function CustomToggle({ children, eventKey, callback, title }) {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;
  const scale = isCurrentEventKey ? -1 : 1;

  return (
    <button
      className="w-full bg-gray-darkest p-8 mb-1 sm:mb-2 text-left"
      type="button"
      onClick={decoratedOnClick}
    >
      
      <div className="w-full flex justify-between">
        <span className="text-pink-light font-normal font-sora text-lg sm:text-2xl">
          {title}
        </span>
        <embed className="ml-4 transition-all duration-700 pointer-events-none" src="/assets/icon_arrow.svg" style={{transform: `scaleY(${scale})`}}/>
      </div>
    </button>
  );
}


const Faq = forwardRef((_, ref) => {
  const content = [
    { 
      id: 1,
      title: 'What is BrainchildNFT?',
      desc: 'We collaborate with promising artists and design studios to provide an elevated experience for users across physical, digital and crypto space. BrainchildNFTs will be perpetually redeemable, gamified through enhancement and available in major metaverse & digital galleries.',
    },
    { 
      id: 2,
      title: 'What is Ethclock?',
      desc: 'Ethclock is the first brainchildNFT collection of 5,000 luxury clock designed and conceptualised by ChenKai Zhang, founder of DLIGHT STUDIO. Set yourself apart from traditional luxury watch, furniture and wearables. Immerse yourself in the new age of luxury.',
    },
    { 
      id: 3,
      title: 'When do Ethclocks go on sale?',
      desc: 'Brainchild will hold a fairlaunch raffle for Ethclock, estimated to be in mid-December 2021.',
    },
    { 
      id: 4,
      title: 'How many Ethclocks are available?',
      desc: `Ethclock is a collection of 5,000 NFTs with built-in deflationary mechanism via “Enhance” feature.
            4,207 will be available for public sale during the fairlaunch raffle.
            697 will be reserved for community building .
            96 will be reserved for the team and treasury.`,
    },
    { 
      id: 5,
      title: 'How do I buy Ethclock?',
      desc: `
            Public sale will be held in mid-December 2021 (estimated)
            The fairlaunch raffle will be conducted in 3 stages:
            1. Signature collection – wallet signatures will be collected within a 24 hour window.
            2. Raffle – Using Chainlink VRF, 4207 wallets will be whitelisted for minting. Winners will be announced on our website and community channels. You can also connect your wallet to find out if you have been whitelisted.
            3. Minting – You will have 48hours to mint exactly 1 Ethclock per whitelisted wallet.
            Any unminted Ethclock will be raffled away by repeating the stages above in each subsequent week.
      `,
    },
    { 
      id: 6,
      title: 'When is the reveal?',
      desc: `
            A full collection metadata will be revealed once all Ethclocks has been minted. Using Chainlink VRF, all metadata rarity will be randomised. This is designed to prevent sophisticated actors from sniping/minting only the rarest pieces, ensuring a fairmint event.
            We take inspiration from the fine research paper done by Paradigm’s Anish and Hasu.
            (hyperlink the research paper: https://www.paradigm.xyz/2021/10/a-guide-to-designing-effective-nft-launches/)
      `,
    },
    { 
      id: 7,
      title: 'Will rarities matter?',
      desc: 'Rarity is relative to the beholder’s eye. The deflationary mechanics via enhancement will ensure that the number of NFT and redeemable NFT will decrease as the community unlock higher level of Ethclocks. The randomised traits such as RGB and Shine will affect digital and physical appearance, while Efficiency will determine the cost of enhancement.',
    },
    { 
      id: 8,
      title: 'What rights do I get as a BrainchildNFT holder?',
      desc: 'A BrainchildNFT holder will be privy to private community events and receive advantages in future NFT mints. You will also be able to steer the direction of BrainchildNFT project and future drops.',
    },
  ]
  return (
    <div className="relative min-h-screen flex items-center overflow-x-scroll overflow-y-hidden no-scrollbar mt-screen-1/4 select-none" ref={ref.containerRef}>
      <div className="sm:p-24 w-full container mx-auto" ref={ref.contentRef}>
        <div className="relative w-full">
          <div className="w-full p-6 sm:p-8 text-black font-cormorant font-semibold italic text-xl sm:text-3xl backdrop-filter sm:backdrop-blur-0 backdrop-blur-200 bg-white bg-opacity-10">
            Let’s get a few questions out of the way...
          </div>
          {
            content.map((value) => 
              <Accordion key={value.id} defaultActiveKey="0">
                <CustomToggle eventKey="1" title={value.title}>
                </CustomToggle>
                <Accordion.Collapse eventKey="1">
                  <div className="w-full p-8 sm:p-16 font-cormorant font-semibold leading-normal sm:leading-normal text-3xl sm:text-4xl italic background-blur mb-1 sm:mb-2">
                    {value.desc}
                  </div>
                </Accordion.Collapse>
              </Accordion>
            )
          }
        </div>
      </div>
    </div>
  );
});

export default Faq;