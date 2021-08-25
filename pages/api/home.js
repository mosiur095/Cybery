export default (req, res) => {
  res.status(200).json({
    images: [
      '/images/homeslider/car.webp',
      '/images/homeslider/crrsucaerrx.webp',
      '/images/homeslider/city.webp',
    ],
    headerText: [
      'We are a <span class="white">creative film</span> and <span class="white">video</span> production company based in Berlin &amp; Hamburg',
      'There is a <span class="white">beautiful</span> intention in the <span class="white">process</span> of shooting films.',
      'Lets make <span class="white">great</span> things <span class="white">togather!</span>',
    ],
  })
}
