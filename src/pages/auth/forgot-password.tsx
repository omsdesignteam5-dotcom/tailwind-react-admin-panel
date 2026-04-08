import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Loader2, ArrowLeft, Mail, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ThemeSwitch } from '@/components/theme-switch'

type FormState = 'idle' | 'loading' | 'sent' | 'resending'

export function ForgotPasswordPage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }
    // Simple email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setFormState('loading')

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800))

    setFormState('sent')
  }

  const handleResend = async () => {
    setFormState('resending')
    await new Promise((r) => setTimeout(r, 1500))
    setFormState('sent')
  }

  // Success state — Email sent
  if (formState === 'sent' || formState === 'resending') {
    return (
      <div className='relative flex min-h-svh items-center justify-center bg-background p-4'>
        <div className='fixed top-4 right-4 z-50'>
          <ThemeSwitch />
        </div>
        <div className='w-full max-w-[420px]'>
          {/* Logo */}
          <div className='mb-8 flex flex-col items-center gap-2'>
            <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='h-6 w-6'>
                <path d='M12 2L2 7l10 5 10-5-10-5z' />
                <path d='M2 17l10 5 10-5' />
                <path d='M2 12l10 5 10-5' />
              </svg>
            </div>
          </div>

          <Card className='border-border/60 shadow-xl shadow-black/5'>
            <CardHeader className='text-center pb-2'>
              <div className='mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30'>
                <CheckCircle2 className='h-7 w-7 text-emerald-600 dark:text-emerald-400' />
              </div>
              <CardTitle className='text-lg'>Check your email</CardTitle>
              <CardDescription className='pt-1'>
                We've sent a password reset link to{' '}
                <span className='font-medium text-foreground'>{email}</span>.
                The link will expire in 15 minutes.
              </CardDescription>
            </CardHeader>
            <CardContent className='grid gap-3 pt-2'>
              <Button variant='outline' className='w-full' asChild>
                <a href={`mailto:${email}`}>
                  <Mail className='h-4 w-4' />
                  Open email app
                </a>
              </Button>

              <div className='flex items-center justify-center gap-1 pt-1'>
                <span className='text-sm text-muted-foreground'>Didn't get the email?</span>
                <Button
                  variant='link'
                  size='sm'
                  onClick={handleResend}
                  disabled={formState === 'resending'}
                  className='h-auto p-0 text-sm'
                >
                  {formState === 'resending' ? (
                    <>
                      <Loader2 className='h-3 w-3 animate-spin' />
                      Sending...
                    </>
                  ) : (
                    'Resend'
                  )}
                </Button>
              </div>
            </CardContent>
            <CardFooter className='justify-center'>
              <Link
                to={'/login'}
                className='inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
              >
                <ArrowLeft className='h-3.5 w-3.5' />
                Back to sign in
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  // Default state — Enter email form
  return (
    <div className='relative flex min-h-svh items-center justify-center bg-background p-4'>
      {/* Theme toggle */}
      <div className='fixed top-4 right-4 z-50'>
        <ThemeSwitch />
      </div>

      {/* Background pattern */}
      <div className='pointer-events-none fixed inset-0 opacity-[0.015] dark:opacity-[0.03]'>
        <div
          className='h-full w-full'
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className='relative z-10 w-full max-w-[420px]'>
        {/* Logo */}
        <div className='mb-8 flex flex-col items-center gap-2'>
          <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='h-6 w-6'>
              <path d='M12 2L2 7l10 5 10-5-10-5z' />
              <path d='M2 17l10 5 10-5' />
              <path d='M2 12l10 5 10-5' />
            </svg>
          </div>
          <h1 className='text-xl font-semibold tracking-tight text-foreground'>
            Admin Panel
          </h1>
        </div>

        <Card className='border-border/60 shadow-xl shadow-black/5'>
          <CardHeader className='text-center'>
            <CardTitle className='text-lg'>Forgot password?</CardTitle>
            <CardDescription>
              Enter your email and we'll send you a link to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className='grid gap-4' id='forgot-password-form'>
              {error && (
                <div className='rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2.5 text-sm text-destructive'>
                  {error}
                </div>
              )}

              {/* Email */}
              <div className='grid gap-2'>
                <Label htmlFor='reset-email'>Email address</Label>
                <Input
                  id='reset-email'
                  type='email'
                  placeholder='name@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={formState === 'loading'}
                  autoComplete='email'
                  autoFocus
                />
              </div>

              {/* Submit */}
              <Button type='submit' disabled={formState === 'loading'} className='w-full'>
                {formState === 'loading' ? (
                  <Loader2 className='animate-spin' />
                ) : (
                  <Mail className='h-4 w-4' />
                )}
                Send reset link
              </Button>
            </form>
          </CardContent>
          <CardFooter className='flex flex-col gap-3'>
            <Link
              to={'/login'}
              className='inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors'
            >
              <ArrowLeft className='h-3.5 w-3.5' />
              Back to sign in
            </Link>
            <p className='text-center text-sm text-muted-foreground'>
              Don't have an account?{' '}
              <Link
                to={'/sign-up'}
                className='font-medium text-primary underline-offset-4 hover:underline'
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
