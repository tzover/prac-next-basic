import Image from 'next/image'
function PetsPage() {
  return (
    <div>
      {['1', '2', '3', '4', '5', '6'].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt='pet' width='200' height='200' />
          </div>
        )
      })}
    </div>
  )
}

export default PetsPage
