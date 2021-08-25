export default (req, res) => {
  res.status(200).json([
    {
      alternate: false,
      title: 'Image Editing',
      altText:'Image Editing',
      iconContainerClasses: '',
      iconClassName: '/images/icon/image_editing.png',
      description: `For image editing services our price starts from <b>$0.30</b> per image but it depends
       on the kind of services you are expecting. The price will vary depending on different services
        like Background removal, Clipping path, Retouching, Color correction, image manipulation, etc.`,
    },



    {
      alternate: true,
      title: 'Video Editing',
      altText:'video Editing',
      iconContainerClasses: '',
      iconClassName: '/images/icon/video_editing.png',
      description: `We usually offer video editing services which start from <b>$80</b> per video which 
      is basic video editing. But if you need advanced editing the price will go higher depending
       on your requirement.`,
    },
    {
      alternate: false,
      title: '3D Product Visualization',
      altText:'3d Editing',
      iconContainerClasses: '',
      iconClassName: '/images/icon/3d.png',
      description: `Our 3d service starts from a price tag of <b>$25</b> but it is also
       variable depending on the type of object or project you want us to accomplish.`,
    }
  ])
}
