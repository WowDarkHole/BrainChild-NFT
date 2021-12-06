import React from 'react';


const backgroundUrls = {
  vote: '/assets/card_concept_vote.svg',
  participate: '/assets/card_concept_participate.svg',
  redeem: '/assets/card_concept_redeem.svg',
  enhance: '/assets/card_concept_enhance.svg',
};

// const titleUrls = {
//   vote: '/assets/text_concept_vote.svg',
//   participate: '/assets/text_concept_participate.svg',
//   redeem: '/assets/text_concept_redeem.svg',
//   enhance: '/assets/text_concept_enhance.svg',
// };

const descTexts = {
  vote: 'Determine the next NFT drop and features',
  participate: 'Exclusive access to community events and real-world previleges',
  redeem: 'Collect physical manifestations of  your NFTs',
  enhance: 'Upgrade your NFTs to improve their rarity and unlock design elements',
};

// const descUrls = {
//   vote: '/assets/text_concept_vote_desc.svg',
//   participate: '/assets/text_concept_participate_desc.svg',
//   redeem: '/assets/text_concept_redeem_desc.svg',
//   enhance: '/assets/text_concept_enhance_desc.svg',
// };

const Card = ({type, current}) => {

  return (
    <div className="group relative radial-mask" style={{backgroundColor: '#22262A', maxWidth: '24rem', maxHeight: '24rem'}}>
      <div className="absolute inline-flex flex-col justify-between h-full w-full items-start p-2 sm:p-6 md:p-8 lg:p-10 xl:p-12 top-0 left-0">
        <div className="hidden sm:block">
          <p className={"concept-title text-xl sm:text-3xl uppercase max-w-full origin-top-left flex justify-between"
            +(current ? " visible scale-100 translate-y-0": " invisible transform scale-125 translate-y-3")}>
            <span>{type}</span>
            <embed className="w-8 pointer-events-none" src="/assets/icon_x.svg"/>
          </p>
          <div className="max-w-full">
            <p className={"hero-title text-xl sm:text-xl text-left mt-8 max-w-full"
            +(current ? " visible translate-y-0": " translate-y-10 invisible")}>
              {descTexts[type]}
            </p>
          </div>
        </div>
        <div className="sm:hidden flex items-center justify-center w-full h-full">
          <embed className="w-10 pointer-events-none" src="/assets/icon_x.svg"/>
        </div>
      </div>
      <div>
        <embed className={"w-full pointer-events-none "+(current? "circle-clip-0": "circle-clip-36")} src={backgroundUrls[type]}/>
      </div>
    </div>
  );
}

export default Card;