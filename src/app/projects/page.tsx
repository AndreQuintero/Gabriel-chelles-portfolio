import { ProjectCardProps } from '../components/project-card'
import { Projects } from '../templates/projects'
const imgs = [
  {
    url: 'https://s3-alpha-sig.figma.com/img/7bdf/a84d/96bd62b629cbb137672d2a8b37ba7c98?Expires=1702252800&Signature=ajSjvWUfYTVyOXRPy7P4OAvhT2SBCWqlB4m~of5nKacR1fB2llBERpes1zQ-jLGVHbDN47sOftJc~wYWYQOWEifpDdOc9Z7Vtt6GsYIwP2wUhxH5nPAA74s1vNhyjN0iK77wz4HMV65~eUTfZfDbBsxF1K4evSUNHROudDFCQeTks~hYgGYfyUNaQWku-prjsotMCzcgAT-L-Ti9rCkgbC-6Fr-4lsqu2xBCAQ2Egh9pDftSni6Aq3UVCtS-TdWVdZWKZmgru8cZ-sV53OPWC6hdbk5H0~ybmmWPr~FpDEm5NT6bRRjyRnhzqY2HD0q8yfth31Foz5rUsRHeBFgfPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    description: 'Thumbnail'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/db58/53a8/77711939481e5980ffba30ac09bb53b7?Expires=1702252800&Signature=ZTcbl2jhvZ5zY0tz-rdECpz9Waw6fSKB9Y53E1QvRg1MElHP-SsmRNjnA97uOlKS63etGG8jAl0I1NHQ6GZWdThDPvqFmEi4boUhWqCjYlRGq8e6nTElaM~5GImy6IWbU5gTJ5CfntMkhrGGQdBVDwfpEAU7N7o3gOiK6YgL07zvWDKvSxBns2Tnulh0LAvnTND5NmxR~~lw5o~AV1fBznP5026du37fsLA4ZnEupv5D8VFNQrntbKlnPdSBO22CfVq3228rEurV087tUL3mE4~GPfw4x0HwkbYOFEyghfZ64gleCIxuBvk-ENhET-4kIBcQ7feOPYh2CsEwM8jm6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    description: 'Imagem 1'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/d167/748f/775c0cbf942b15f361a9b846417bf95c?Expires=1702252800&Signature=LyA4NAEZru8YSR26tVOXQQE8FLRAhbiSKoU6M3g1iZnW67C2N7h~psybouLzNUgoCgOkoqF4pGyZl~ooOxMDezEVUnnJOJe7hJxgkI~WQdHdX4siEtgH5iypeaJ647cm4FA8ltQHW1K3Y5OUGFS3CPBcVdjrGiaUTWbO7taPCn8vkjeU4MrFq5VBfNSosxVcUVh4Lbac1KlQPj8bErbdIcf9qupOwT1mfdHe6XP3Oa8xIfEFYJZH1QDwjUUZmRWMcC9TMe8DPFJRmUmULMl7j8D~~BMc2jsvdCgG6iigV3qmcd1bynHTj7VGCdfPp7GNvhCbCE0P8TWRSkumAeZssg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    description: 'Imagem 2'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/5487/5000/cdc554d4bfdf70fc98656c9bed596241?Expires=1702252800&Signature=krSbLO8Xvuq6rqXodIzhY6XDveXD8Q-msNoEXlMkIy3cW0OS03-GqAhHFL6Wq7TNx4zOHqbWFnvHa~J0UzXrXBIBG-VbUJNVVZGSn7DKQIlGRs2d-l8~x9RC7PYA5YweHXXxe4Ms76g1RmhogfHOxtkfM7WCqN7FJ-wXLM0uHM7E138txflrnviu14-rEZj2wJOh9yZ-j9rwi0n4h8v6gDdtNtpzYe8SxX68m8sA3A486LODxH1UyOOLLS-G4lxN16wrNSsswyNyzDy7Zzw6Uum1HXS7UbtYateEI3jIHN6Q9T6NveybC8cpxSLgXdbTeSNdXZUdcn1GSTr4duIsRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    description: 'Imagem 3'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/6205/c0d2/bf217f878fb6d4b221b84ddcf34c7e2f?Expires=1702252800&Signature=m~kASOO2VJw1l4KuorLnQwXaE9MhdF3njyFM~8njCN8pORy6LoIaSlTdqiN3v59zVYsTH62rZ7MhLZPU7dnJeUtAB8tmEdQhj-hTHxuQ33lunftfTZzUmCbiuFzuVN5wxk-VJEwzi03oxUIfPxFsBV0~ljRD9qsl3~sBaeEg-A5ySc9NOkTaGaZUKHuUGuVOFzEJlWoGG6cTcBwJ8k3h0E23gBtQ73-TS3Wx1mcVBPUNpwppbF9Bx3mX91SFrxwI9v0XimkoECBKuIBpzVIywXa6nALraQDUWQvZGTRE-V9NwVqpdvDaQguRGP0sWQerVNoyWCmMoTWJDZp8H8~PtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    description: 'Imagem 4'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/0ada/274d/9f29a823b7074ab08572767ec8be30e0?Expires=1702252800&Signature=dyoNiHRpnyRRCg~hDUpmv~YzgBgwLn1ehqU5ucMn5E5Ffrs0C~VRXiwpsScfw74hWeMK-6O95vIysFiC1h~Te~lcMdLD9TwUWeSyKjXgsW~~46dDIu9EzBaveve2DohI58ITPuvd8U5t0P9Qt9VMvftWWOghUy5CiD7ujwuWeXIzUqBq1erBRHERW7umXhj1euH5bPonqArX66E2UHLvU51P5HGOLJSd3t1vsxuDe8oVQT9QYV1~iKStlNgs7M7vfqxFTQDTyZi8~QSc8QtixolgSBbkqCMzMeO~rk49k2K5m6xxOv1xxFoXJ4IInJnI8dIfobYx63UOLcsSJ4g4CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    description: 'Imagem 5'
  }
]

const projetcs: ProjectCardProps[] = [
  {
    images: imgs,
    slug: 'iguatemi',
    title: 'MarketPlace para Shopping Iguatemi Fortaleza'
  },
  {
    images: imgs,
    slug: 'iguatemi',
    title: 'MarketPlace para Shopping Iguatemi Fortaleza'
  },
  {
    images: imgs,
    slug: 'iguatemi',
    title: 'MarketPlace para Shopping Iguatemi Fortaleza'
  },
  {
    images: imgs,
    slug: 'iguatemi',
    title: 'MarketPlace para Shopping Iguatemi Fortaleza'
  }
]

export default function ProjectsPage() {
  return (
    <main>
      <Projects projects={projetcs} />
    </main>
  )
}
