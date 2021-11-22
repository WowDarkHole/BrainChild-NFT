import React from 'react';

const ConceptDialog = ({onHide, visible}) => {
  return (
    <div className={"absolute top-0 left-0 w-full pt-24 sm:p-16 min-h-full overflow-hidden "+(visible ? "block": "hidden")}>
      <div className="py-10 sm:py-20 px-10 sm:px-10 md:px-16 lg:px-32 sm:border-2 border-gray-600" style={{background: 'linear-gradient(90.86deg, #FFC6CE 26.22%, #64D6EE 97.07%)'}}>
        <div className="container mx-auto">
          <div className="w-full cursor-pointer">
            <div className="ml-auto -mb-16 w-max hidden sm:block" onClick={onHide}>
              <embed className="w-28 h-28 md:w-36 md:h-36 pointer-events-none" src="/assets/btn_concept_overlay_close.svg" />
            </div>
            <div className="mx-auto mb-16 w-max block sm:hidden" onClick={onHide}>
              <embed className="w-18 h-18 pointer-events-none" src="/assets/btn_concept_overlay_close_mobile.svg" />
            </div>
          </div>
          <p className="overlay-title text-5xl sm:text-7xl">Redeem</p>
          <div className="grid grid-cols-1 sm:grid-cols-5 items-center justify-items-center mt-10">
            <div className="col-span-1 sm:col-span-3">
              <p className="overlay-desc break-words text-left text-4xl sm:text-4xl leading-snug sm:leading-snug" style={{textIndent: '5rem'}}>
                Receive the physical version of your NFT product when you interact with our Redeem smart contract. Connect your wallet to see if your NFT is available to be redeemed or on cooldown, get it delivered to your home.
              </p>
              <p className="overlay-desc mt-10 break-words text-left text-4xl sm:text-4xl leading-snug sm:leading-snug" style={{textIndent: '5rem'}}>
                Proud owners of Brainchild NFTs will also be able to interact with their NFTs in digital galleries, virtual worlds and metaverses. 3D models will be integrated in major blockchain-based virtual worlds like Decentraland, Sandbox, Cryptovoxels and Somnium.
              </p>
            </div>
            <embed className="p-4 col-span-1 sm:col-span-2 w-full" src="/assets/image_concept_overlay_gift.svg"/>
          </div>
          <p className="overlay-title text-5xl sm:text-7xl mt-52">Enhance</p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 items-center justify-items-center mt-10">
            <div className="col-span-1 sm:col-span-3">
              <p className="overlay-desc break-words text-left text-4xl sm:text-4xl leading-snug sm:leading-snug" style={{textIndent: '5rem'}}>
                Evolve your NFT to the next level by interacting with our Enhance smart contract. Roll the dice for 5 possible outcomes of enhancement.
              </p>
            </div>
            <embed className="p-4 col-span-1 sm:col-span-1 w-full mt-16 sm:mt-0" src="/assets/image_concept_overlay_enhance.svg"/>
          </div>
          <embed className="p-5 w-full hidden sm:block" src="/assets/image_concept_overlay_enhance_cards.svg"/>
          <embed className="sm:p-5 w-full block sm:hidden mt-16" src="/assets/image_concept_overlay_enhance_cards_mobile.svg"/>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 items-center justify-items-center mt-10">
            <div className="col-span-1">
              <p className="overlay-desc break-words text-left text-4xl sm:text-4xl leading-snug sm:leading-snug" style={{textIndent: '5rem'}}>
                The probability of outcomes is shown by this table.
              </p>
            </div>
            <embed className="p-4 col-span-1 sm:col-span-3 w-full hidden sm:block" src="/assets/image_concept_overlay_outcome.svg"/>
            <div className="p-4 col-span-1 sm:col-span-3 w-full block sm:hidden overflow-x-scroll"><embed className="h-96" src="/assets/image_concept_overlay_outcome_mobile.svg"/></div>
          </div>
          <div>
            <p className="overlay-desc mt-20" style={{fontSize: '35px'}}>Random traits in tokens determining rarity</p>
            <embed className="mt-10 w-full sm:px-6 lg:px-32 py-6 hidden sm:block" src="/assets/image_concept_overlay_traits.svg"/>
            <embed className="mt-10 w-full px-4 py-6 block sm:hidden" src="/assets/image_concept_overlay_traits_mobile.svg"/>
          </div>
          <p className="overlay-title text-5xl sm:text-7xl mt-32">Participate</p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 items-center justify-items-center mt-10 sm:mt-10">
            <div className="col-span-1 sm:col-span-3">
              <p className="overlay-desc break-words text-left text-4xl sm:text-4xl leading-snug sm:leading-snug" style={{textIndent: '5rem'}}>
                Brainchild NFT owners are welcomed to our private community events, gain an edge in future drops, and access real-world privilege (TBC). Charred NFT holders will be given priority access to future mints.
              </p>
            </div>
            <embed className="p-4 col-span-1 sm:col-span-1 w-full" src="/assets/image_concept_overlay_participate.svg"/>
          </div>
          <p className="overlay-title text-5xl sm:text-7xl mt-32">Vote</p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 items-center justify-items-center mt-10">
            <div className="col-span-1 sm:col-span-3">
              <p className="overlay-desc break-words text-left text-4xl sm:text-4xl leading-snug sm:leading-snug" style={{textIndent: '5rem'}}>
                Suggest and vote on the subsequent NFT product drop, designs, features and shape the future of Brainchild project.
              </p>
            </div>
            <embed className="p-4 col-span-1 sm:col-span-1 w-full" src="/assets/image_concept_overlay_vote.svg"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConceptDialog;