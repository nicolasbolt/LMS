import React from 'react'
import Layout from '@/components/Layout'
import H1 from '@/components/utils/H1'
import { useRouter } from 'next/router'
import { NEXT_PUBLIC_API_URL } from '@/utils/constants'

export default function Courses({ courses }) {
    const router = useRouter()
  
    return (
        <Layout>
            <div className='m-5'>
                <H1>Courses</H1>
                {courses.map(course => (
                    <div className="mt-10 max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" onClick={() => router.push(`/courses/${course.attributes.slug}`)}>
                        <img class="w-full" src="python.png" alt="Sunset in the mountains" />
                        <div className='p-5'>
                            <div class="font-bold text-xl mb-2 text-gray-700">{course.attributes.title}</div>
                            <p class="text-gray-700 text-base">
                                {course.attributes.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
  )
}

export async function getServerSideProps() {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/courses`)
    const data = await response.json()

    return {
        props: {
            courses: data.data,
        }
    }
}
