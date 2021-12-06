import React, { forwardRef, useContext, useEffect, useState } from 'react';
import { Accordion, useAccordionButton, AccordionContext } from 'react-bootstrap'

import Card from './Card';

function CustomToggle({ children, eventKey, callback, type, setActiveEvent }) {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;
  useEffect(() => {
    setActiveEvent(activeEventKey);
  }, [activeEventKey, setActiveEvent])

  return (
    <div
      className=""
      onClick={decoratedOnClick}
    >
      <Card type={type} current={isCurrentEventKey}/> 
    </div>
  );
}

const Concept = forwardRef(({slide}, ref) => {
  const [activeEvent, setActiveEvent] = useState(null);
  return (
    <div className="min-h-screen items-center flex w-full justify-center mt-screen-1/4" ref={ref.containerRef}>
      <div className="flex w-full px-0 md:px-32 pb-16 pt-32 md:pt-36 sm:pb-20" style={{height: 'max-content'}} ref={ref.contentRef}>
        <Accordion className="w-full">
          <div className="block sm:w-full disable-animation">
            <div className={"sm:w-80 z-10 sm:float-left "+(window.innerWidth < 640 && slide === 1 ? "sticky top-24" : "")}>
              <div className="grid grid-cols-4 grid-rows-1 sm:grid-cols-1 sm:grid-rows-4 gap-1 sm:gap-4">
                <CustomToggle eventKey="1" type="redeem" setActiveEvent={setActiveEvent}/> 
                <CustomToggle eventKey="2" type="enhance" setActiveEvent={setActiveEvent}/>
                <CustomToggle eventKey="3" type="participate" setActiveEvent={setActiveEvent}/> 
                <CustomToggle eventKey="4" type="vote" setActiveEvent={setActiveEvent}/> 
              </div>
            </div>
            <div className="sm:float-none sm:overflow-hidden">
            <div className="sm:ml-8 mt-2 sm:mt-0">
              {
                !activeEvent &&
                  <div className="p-8 sm:p-16 background-blur font-cormorant text-2xl sm:text-4xl font-semibold italic leading-tight">
                    <p style={{textIndent: '5rem'}}>
                      Brainchild aims to bring gamification of NFTs to our physical world via Services-as-a-NFT and project their identity through the cryptoverse. We seek to collaborate with artists and brands to help token holders build their identities and express their individuality within and beyond the cryptoverse. 
                    </p>
                    <p className="mt-10">
                        <p>Token holders will be able to:</p>
                        <p>1. Redeem - Regularly redeem the physical manifestation of their NFT.</p>
                        <p>2. Enhance - Interact with our smart contract to enhance their NFT via a probability 
                        distribution.</p>
                        <p>3. Participate - Exclusive access to future mints as well as real-world privileges and 
                        events.</p>
                        <p>4. Vote - Determine what the next product will be, and lock-up period for redemption.</p>
                    </p>
                    <p className="flex justify-between mt-10">
                      <embed className="hidden sm:block" src="/assets/icon_overlay_arrow.svg" />
                      <embed className="block sm:hidden" src="/assets/icon_overlay_arrow_mobile.svg" />
                      <span className="font-sora text-xl sm:text-3xl font-bold not-italic sm:ml-16 text-right opacity-10 sm:opacity-100 sm:text-gray-darkest">
                        TAP ON THE CARDS TO LEARN MORE
                      </span>
                    </p>
                  </div>
              }
              <Accordion.Collapse eventKey="1">
                <div className="p-8 sm:p-16 background-blur font-cormorant text-2xl sm:text-4xl font-semibold italic leading-tight">
                  <p style={{textIndent: '5rem'}}>Receive the physical version of your NFT product when you interact with our Redeem smart contract. Connect your wallet to see if your NFT is available to be redeemed or on cooldown, get it delivered to your home.</p>
                  <p className="mt-10" style={{textIndent: '5rem'}}>Proud owners of Brainchild NFTs will also be able to interact with their NFTs in digital galleries, virtual worlds and metaverses. 3D models will be integrated in major blockchain-based virtual worlds like Decentraland, Sandbox, Cryptovoxels and Somnium. </p>
                  <embed className="w-96 max-w-full mx-auto" src="/assets/image_concept_overlay_gift.svg"/>
                </div>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <div className="p-8 sm:p-16 background-blur sm:mt-84">
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 items-center justify-items-center mt-10">
                    <div className="col-span-1 sm:col-span-3">
                      <p className="font-cormorant text-2xl sm:text-4xl font-semibold italic leading-tight" style={{textIndent: '5rem'}}>
                        Evolve your NFT to the next level by interacting with our Enhance smart contract. Roll the dice for 5 possible outcomes of enhancement.
                      </p>
                    </div>
                    <embed className="p-4 col-span-1 sm:col-span-1 w-full mt-16 sm:mt-0" src="/assets/image_concept_overlay_enhance.svg"/>
                  </div>
                  <embed className="p-5 w-full hidden sm:block" src="/assets/image_concept_overlay_enhance_cards.svg"/>
                  <embed className="sm:p-5 w-full block sm:hidden mt-16" src="/assets/image_concept_overlay_enhance_cards_mobile.svg"/>
                  <div className="grid grid-cols-1 sm:grid-cols-1 gap-10 items-center justify-items-center mt-10">
                    <div className="col-span-1">
                      <p className="font-cormorant text-2xl sm:text-4xl font-semibold italic leading-tight" style={{textIndent: '5rem'}}>
                        The probability of outcomes is shown by this table.
                      </p>
                    </div>
                    <embed className="p-4 col-span-1 sm:col-span-3 w-full hidden sm:block" src="/assets/image_concept_overlay_outcome_mobile.svg"/>
                    <div className="p-4 col-span-1 sm:col-span-3 w-full block sm:hidden overflow-x-scroll"><embed className="h-96" src="/assets/image_concept_overlay_outcome_mobile.svg"/></div>
                  </div>
                  <div>
                    <p className="font-cormorant text-2xl sm:text-4xl font-semibold italic leading-tight">Random traits in tokens determining rarity</p>
                    <embed className="mt-10 w-full hidden sm:block" src="/assets/image_concept_overlay_traits.svg"/>
                    <embed className="mt-10 w-full block sm:hidden" src="/assets/image_concept_overlay_traits_mobile.svg"/>
                  </div>
                </div>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <div className="p-8 sm:p-16 background-blur font-cormorant text-2xl sm:text-4xl font-semibold italic leading-tight sm:mt-168">
                  <p style={{textIndent: '5rem'}}>Brainchild NFT owners are welcomed to our private community events, gain an edge in future drops, and access real-world privilege (TBC). Charred NFT holders will be given priority access to future mints.</p>
                  <embed className="w-56 mx-auto mt-10" src="/assets/image_concept_overlay_participate.svg"/>
                </div>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <div className="p-8 sm:p-16 background-blur font-cormorant text-2xl sm:text-4xl font-semibold italic leading-tight sm:mt-252">
                  <p style={{textIndent: '5rem'}}>Suggest and vote on the subsequent NFT product drop, designs, features and shape the future of Brainchild project.</p>
                  <embed className="w-56 mx-auto mt-10" src="/assets/image_concept_overlay_vote.svg"/>
                </div>
              </Accordion.Collapse>
            </div>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  );
});

export default Concept;