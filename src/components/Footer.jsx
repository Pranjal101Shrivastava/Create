import React from 'react'
import Logoo from '../macbook-pro-16-new-light-mode-1.png'
import Explore from './Explore'

const Footer = () => {
  return (
    
<>
<span className="label-1">
<p className="text-wrapper-1">Unleash your creativity in your curative zone !</p>
</span>
<div className="label-2">
<p className="whether-you-re-a">
Whether you&#39;re a creative enthusiast or a professional designer, Creativise zone is the first browser based
design tool that allows to create stunning graphics with more user friendly experience. It has the power of
stitching your .psd (Photoshop) and .ai (Illustrator) files with intuitive features to meet all your design
needs. This tool prioritizes user-friendliness and aims to provide a seamless and enjoyable design experience
like never before.
</p>
<div>
    <Explore />
</div>
</div>

      <span className="image-f">
<img className="macbook-pro-new" alt="Macbook pro new" src={Logoo} />
</span>
</>

  )
}

export default Footer
