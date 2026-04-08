import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const artworks = [
  { artist: 'Ornella Binni', art: 'Sunflowers' },
  { artist: 'Tom Byrom', art: 'Mountain Lake' },
  { artist: 'Vladimir Malyavko', art: 'City Lights' },
  { artist: 'Ornella Binni', art: 'Coastal Sunset' },
  { artist: 'Tom Byrom', art: 'Forest Trail' },
  { artist: 'Vladimir Malyavko', art: 'Winter Morning' },
  { artist: 'Ornella Binni', art: 'Cherry Blossoms' },
]

export default function ScrollAreaHorizontal() {
  return (
    <ScrollArea className='w-96 whitespace-nowrap rounded-md border'>
      <div className='flex w-max space-x-4 p-4'>
        {artworks.map((artwork) => (
          <figure key={artwork.art} className='shrink-0'>
            <div className='overflow-hidden rounded-md'>
              <div className='h-[150px] w-[200px] bg-muted flex items-center justify-center'>
                <span className='text-xs text-muted-foreground'>
                  {artwork.art}
                </span>
              </div>
            </div>
            <figcaption className='pt-2 text-xs text-muted-foreground'>
              Photo by{' '}
              <span className='font-semibold text-foreground'>
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  )
}
