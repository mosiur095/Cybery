export default (req, res) => {
  res.status(200).json([
    {
      name: 'Ainul Bashar',
      occupation: 'Co-Founder & CEO',
      image: '/images/team/Ainul_Bashar.webp',
    },
    {
      name: 'Apel Mahmud',
      occupation: 'Co-Founder & CCO',
      image: '/images/team/Apel_Mahmud.webp',
    },


    {
      name: 'Walaya Surinphong',
      occupation: 'CFO',
      image: '/images/team/img-1.webp',
    },
    {
      name: 'Md Rathik',
      occupation: 'CTO',
      image: '/images/team/rathik.webp',
    },
  ])
}
