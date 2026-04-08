import { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { Eye, EyeOff, Loader2, UserPlus, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ThemeSwitch } from '@/components/theme-switch'

type FormState = 'idle' | 'loading' | 'success'

export function SignUpPage() {
  const navigate = useNavigate()
  const [formState, setFormState] = useState<FormState>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) { setError('Please enter your full name.'); return }
    if (!email.trim()) { setError('Please enter your email address.'); return }
    if (!password.trim()) { setError('Please enter a password.'); return }
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return }
    if (!agreeTerms) { setError('Please agree to the Terms & Privacy Policy.'); return }

    setFormState('loading')

    // Simulate API call
    await new Promise((r) => setTimeout(r, 2000))

    setFormState('success')
  }

  if (formState === 'success') {
    return (
      <div className='relative flex min-h-svh items-center justify-center bg-background p-4'>
        <div className='fixed top-4 right-4 z-50'>
          <ThemeSwitch />
        </div>
        <div className='w-full max-w-[420px]'>
          <Card className='border-border/60 shadow-xl shadow-black/5'>
            <CardHeader className='text-center pb-2'>
              <div className='mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30'>
                <CheckCircle2 className='h-7 w-7 text-emerald-600 dark:text-emerald-400' />
              </div>
              <CardTitle className='text-lg'>Account Created!</CardTitle>
              <CardDescription className='pt-1'>
                We've sent a verification link to <span className='font-medium text-foreground'>{email}</span>.
                Please check your inbox and verify your email to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className='grid gap-3 pt-2'>
              <Button onClick={() => navigate({ to: '/login', replace: true })} className='w-full'>
                Go to Sign In
              </Button>
              <Button variant='outline' onClick={() => setFormState('idle')} className='w-full'>
                Use a different email
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

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
            <CardTitle className='text-lg text-left'>Create an account</CardTitle>
            {/* <CardDescription>
              Enter your details below to get started
            </CardDescription> */}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className='grid gap-4' id='signup-form'>
              {error && (
                <div className='rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2.5 text-sm text-destructive'>
                  {error}
                </div>
              )}

              {/* Full Name */}
              <div className='grid gap-2'>
                <Label htmlFor='name'>Full Name</Label>
                <Input
                  id='name'
                  type='text'
                  placeholder='John Doe'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={formState === 'loading'}
                  autoComplete='name'
                  autoFocus
                />
              </div>

              {/* Email */}
              <div className='grid gap-2'>
                <Label htmlFor='signup-email'>Email</Label>
                <Input
                  id='signup-email'
                  type='email'
                  placeholder='name@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={formState === 'loading'}
                  autoComplete='email'
                />
              </div>

              {/* Password */}
              <div className='grid gap-2'>
                <Label htmlFor='signup-password'>Password</Label>
                <div className='relative'>
                  <Input
                    id='signup-password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Min. 6 characters'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={formState === 'loading'}
                    autoComplete='new-password'
                    className='pr-10'
                  />
                  <button
                    type='button'
                    tabIndex={-1}
                    className='absolute right-0 top-0 flex h-full items-center px-3 text-muted-foreground hover:text-foreground transition-colors'
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
                  </button>
                </div>
                {/* Password strength indicator */}
                {password.length > 0 && (
                  <div className='flex gap-1'>
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          password.length >= level * 3
                            ? password.length >= 12
                              ? 'bg-emerald-500'
                              : password.length >= 8
                                ? 'bg-amber-500'
                                : 'bg-destructive'
                            : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Terms */}
              <div className='flex items-start gap-2'>
                <Checkbox
                  id='terms'
                  checked={agreeTerms}
                  onCheckedChange={(v) => setAgreeTerms(v === true)}
                  disabled={formState === 'loading'}
                  className='mt-0.5'
                />
                <Label htmlFor='terms' className='text-sm font-normal leading-snug text-muted-foreground cursor-pointer'>
                  I agree to the{' '}
                  <a href='#' className='text-primary underline-offset-4 hover:underline'>Terms of Service</a>
                  {' '}and{' '}
                  <a href='#' className='text-primary underline-offset-4 hover:underline'>Privacy Policy</a>
                </Label>
              </div>

              {/* Submit */}
              <Button type='submit' disabled={formState === 'loading'} className='w-full'>
                {formState === 'loading' ? <Loader2 className='animate-spin' /> : <UserPlus className='h-4 w-4' />}
                Create Account
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className='mx-auto text-center text-sm text-muted-foreground'>
              Already have an account?{' '}
              <Link
                to={'/login'}
                className='font-medium text-primary underline-offset-4 hover:underline'
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
