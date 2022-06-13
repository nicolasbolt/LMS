import React from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import { NEXT_PUBLIC_API_URL } from '@/utils/constants'

export default function CourseSlug({ course, sorted_course_items }) {
    const router = useRouter()
  
    return (
        <Layout>
            {
            sorted_course_items &&
            sorted_course_items.map(course_item => (
                <div key={course_item.id} className="mt-5 mx-auto md:w-2/4 sm:w-100 rounded overflow-hidden shadow-lg border">
                    <div className='flex justify-between'>
                        <div className='px-3 my-auto'>
                            <div className="font-bold text-xl mb-2 text-gray-700">{course_item.attributes.title}</div>
                        </div>
                        <div className='p-3'>
                            <button className='py-2 bg-sky-700 text-white px-4 text-right rounded cursor-pointer hover:bg-sky-600 transition' onClick={() => router.push(`/courses/${course.attributes.slug}/${course_item.attributes.slug}`)}>Begin</button>
                        </div>
                    </div>
                </div>
            ))}
        </Layout>
  )
}

export async function getServerSideProps({ req, query: {slug} }) {
    let course = null;
    try {
      const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/courses?populate=course_items&filters[slug][$eq]=${slug}`)
      const data = await response.json()
      course = data.data[0]
    } catch(error) {
      console.error(error)
    }

    let sorted_course_items = null

    if (course) {
        sorted_course_items = course.attributes.course_items.data.sort((a, b) => {
            console.log(a.attributes.ordinal < b.attributes.ordinal)
            if (a.attributes.ordinal < b.attributes.ordinal) {
                return -1
            } else if (a.attributes.ordinal > b.attributes.ordinal) {
                return 1;
            }

            return 0;
        })
    }

    return {
        props: {
            course,
            sorted_course_items,
        }
    }
}

