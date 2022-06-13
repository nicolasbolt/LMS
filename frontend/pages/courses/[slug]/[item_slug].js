import Layout from '@/components/Layout'
import React from 'react'
import { marked } from 'marked'
import { NEXT_PUBLIC_API_URL } from '@/utils/constants'
import H1 from '@/components/utils/H1'
import { useRouter } from 'next/router'

export default function CourseItem({ course, course_item }) {
  const router = useRouter()
  return (
    <Layout>
        <div className='mx-10 mt-10'>
            <button className='py-2 border border-2 border-sky-700 text-sky-700 px-4 rounded cursor-pointer hover:bg-sky-700 hover:text-white transition' onClick={() => router.push(`/courses/${course.attributes.slug}`)}>Go Back</button>
        </div>
        <div className='w-3/4 mx-auto mt-10'>
            <H1>{course_item.attributes.title}</H1>
        </div>
        <div className='w-3/4 mx-auto mt-10'
            dangerouslySetInnerHTML={{__html: marked.parse(course_item.attributes.content)}}>
        </div>

        {/* todo add tabs in for additonal content */}
        {/* <ul class="flex md:w-2/4 sm:w-100 mx-auto mt-8">
            <li class="flex-1 mr-2">
                <a class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">Active Item</a>
            </li>
            <li class="flex-1 mr-2">
                <a class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">Nav Item</a>
            </li>
            <li class="text-center flex-1">
                <a class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">Nav Item</a>
            </li>
        </ul> */}
    </Layout>
  )
}

export async function getServerSideProps({ query: {slug, item_slug} }) {
    let course_item
    try {
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/course-items?filters[slug][$eq]=${item_slug}`)
        const data = await response.json()
        course_item = data.data[0]
    } catch(error) {
        console.error(error)
    }

    let course
    try {
        const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/courses?filters[slug][$eq]=${slug}`)
        const data = await response.json()
        course = data.data[0]
    } catch(error) {
        console.error(error)
    }

    return {
        props: {
            course,
            course_item,
        }
    }
}
