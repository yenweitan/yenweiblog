import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { USES } from '../data/usesData'
import UsesTech from '@/components/Uses'

export default function Uses() {
  return (
    <>
      <PageSEO
        title={`Uses - ${siteMetadata.author}`}
        description={`Uses - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/uses`}
      />
      <div className="mb-4">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Things I use currently
        </h1>
        <div className="text-gray-500 dark:text-gray-400 mt-5">
          A list of stuff I use incase you are curious
          <br />
          Self timeline on how my setup changes over time.
        </div>
        <span className="text-lg font-semibold mt-3">Software&nbsp;&&nbsp;gear</span>
        <div className="mt-3">
          {USES.map((d) => (
            <UsesTech key={d.name} name={d.name} description={d.description} link={d.link} />
          ))}
        </div>
        <div className="mt-3">
          <span className="text-sm">
            Note: Waiting for some progress to be made on this section in the future
          </span>
          {/* <figure>
            <embed
              className="w-3/5 h-3/5"
              src="https://wakatime.com/share/@082e14f7-c718-4327-85f4-28e803bdaa80/05162f53-5527-4b7d-979d-c8c3a56814df.svg"
            ></embed>
          </figure> */}
          <div className="pt-10">
            <span className="text-sm">
              I am planning on remaking this site in the future, so stay around to see what I come
              up with.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
