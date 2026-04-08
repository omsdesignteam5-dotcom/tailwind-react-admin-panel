import { Users, DollarSign, Activity, CreditCard } from 'lucide-react'
import { StatsCard } from '@/components/stats-card'

export default function CompositeGrid() {
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full'>
      <StatsCard
        title='Total Students'
        value='2,543'
        icon={<Users />}
        trend={{ value: '12%', isPositive: true }}
        description='from last month'
      />
      <StatsCard
        title='Total Revenue'
        value='$45,231.89'
        icon={<DollarSign />}
        trend={{ value: '20.1%', isPositive: true }}
        description='from last month'
      />
      <StatsCard
        title='Active Courses'
        value='142'
        icon={<Activity />}
        trend={{ value: '4%', isPositive: false }}
        description='since last week'
      />
      <StatsCard
        title='Active Enrollments'
        value='12,234'
        icon={<CreditCard />}
        description='+19% from last month'
      />
    </div>
  )
}
