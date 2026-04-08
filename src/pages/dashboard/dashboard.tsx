import { Users, GraduationCap, School, Banknote, TrendingUp, UserCheck, BookOpen, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { StatsCard } from '@/components/stats-card'

export function DashboardPage() {
  const stats = [
    {
      title: 'Total Students',
      value: '1,284',
      change: '+12%',
      trend: 'up',
      icon: Users,
      description: 'Active students this term',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Total Teachers',
      value: '84',
      change: '+2',
      trend: 'up',
      icon: GraduationCap,
      description: 'Faculty members',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
    },
    {
      title: 'Total Classes',
      value: '42',
      change: '0',
      trend: 'neutral',
      icon: School,
      description: 'Active classrooms',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
    {
      title: 'Fees Collected',
      value: '$42,500',
      change: '+18.5%',
      trend: 'up',
      icon: Banknote,
      description: 'Revenue this month',
      color: 'text-violet-500',
      bgColor: 'bg-violet-500/10',
    },
  ]

  return (
    <div className='space-y-4'>
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          School Overview
        </h2>
        <p className='text-muted-foreground'>
          Welcome back! Here's an overview of the school's performance today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            icon={
              <div className={`${stat.bgColor} p-2 rounded-lg`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            }
            trend={
              stat.change !== '0'
                ? {
                    value: stat.change,
                    isPositive: stat.trend === 'up',
                  }
                : undefined
            }
            className='overflow-hidden border-border/50 shadow-sm'
          />
        ))}
      </div>

      <div className='grid gap-4 lg:grid-cols-7'>
        {/* Main Chart Placeholder */}
        <Card className='col-span-full border-border/50 shadow-sm lg:col-span-4'>
          <CardHeader>
            <CardTitle className='text-base font-semibold'>Attendance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex h-[300px] flex-col items-center justify-center rounded-xl bg-muted/30 border border-dashed border-border p-8 text-center'>
              <div className='rounded-full bg-background p-4 shadow-sm mb-4'>
                <TrendingUp className='h-8 w-8 text-primary' />
              </div>
              <p className='font-medium text-foreground'>Attendance Analytics</p>
              <p className='text-sm text-neutral-500 max-w-[300px] mt-1'>
                Student attendance trends and reports will be visualized here soon.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Side Panel Placeholder */}
        <Card className='col-span-full border-border/50 shadow-sm lg:col-span-3'>
          <CardHeader className='flex flex-row items-center justify-between'>
            <CardTitle className='text-base font-semibold'>Recent Activities</CardTitle>
            <Button variant='ghost' size='sm' className='h-8 text-xs'>View All</Button>
          </CardHeader>
          <CardContent>
            <div className='space-y-6'>
              {[
                { user: 'Maung Maung', action: 'paid registration fees', time: '2 mins ago', icon: Banknote, iconColor: 'text-violet-500', iconBg: 'bg-violet-500/10' },
                { user: 'Hla Hla', action: 'updated profile picture', time: '15 mins ago', icon: UserCheck, iconColor: 'text-blue-500', iconBg: 'bg-blue-500/10' },
                { user: 'Grade 10-A', action: 'new lesson "Algebra II" started', time: '1 hour ago', icon: BookOpen, iconColor: 'text-amber-500', iconBg: 'bg-amber-500/10' },
                { user: 'Teacher Kyaw', action: 'marked attendance for Class 8-B', time: '3 hours ago', icon: Clock, iconColor: 'text-emerald-500', iconBg: 'bg-emerald-500/10' },
              ].map((activity, i) => (
                <div key={i} className='flex items-start gap-4'>
                  <div className={`${activity.iconBg} p-2 rounded-full shrink-0`}>
                    <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
                  </div>
                  <div className='min-w-0 flex-1 py-0.5'>
                    <p className='text-sm leading-tight'>
                      <span className='font-semibold text-foreground'>{activity.user}</span>{' '}
                      <span className='text-muted-foreground'>{activity.action}</span>
                    </p>
                    <p className='text-xs text-muted-foreground mt-1'>{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

