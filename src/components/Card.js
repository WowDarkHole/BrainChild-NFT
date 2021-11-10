import React from 'react';


const backgroundUrls = {
  vote: '/assets/card_concept_vote.svg',
  participate: '/assets/card_concept_participate.svg',
  redeem: '/assets/card_concept_redeem.svg',
  enhance: '/assets/card_concept_enhance.svg',
};

const titleUrls = {
  vote: '/assets/text_concept_vote.svg',
  participate: '/assets/text_concept_participate.svg',
  redeem: '/assets/text_concept_redeem.svg',
  enhance: '/assets/text_concept_enhance.svg',
};

const descUrls = {
  vote: '/assets/text_concept_vote_desc.svg',
  participate: '/assets/text_concept_participate_desc.svg',
  redeem: '/assets/text_concept_redeem_desc.svg',
  enhance: '/assets/text_concept_enhance_desc.svg',
};

const Card = ({type}) => {

  return (
    <div className="group relative radial-mask" style={{backgroundColor: '#22262A', maxWidth: '24rem', maxHeight: '24rem'}}>
      <div className="absolute inline-flex flex-col justify-between h-full w-full items-start p-12 top-0 left-0">
        <embed className="max-w-full invisible group-hover:visible transition duration-500 transform scale-125 group-hover:scale-100 origin-top-left translate-y-3 group-hover:translate-y-0" src={titleUrls[type]} alt=""/>
        <div className="max-w-full">
          <embed className="my-8 max-w-full invisible group-hover:visible transform duration-500 translate-y-10 group-hover:translate-y-0" src={descUrls[type]}/>
          <embed className="max-w-full transition duration-500 opacity-0 group-hover:opacity-100" src="/assets/btn_concept_learnmore.svg"/>
        </div>
      </div>
      <embed className="w-full transition-clip-path duration-500 circle-clip-36 group-hover:circle-clip-0" src={backgroundUrls[type]}/>
    </div>
  );
}

export default Card;