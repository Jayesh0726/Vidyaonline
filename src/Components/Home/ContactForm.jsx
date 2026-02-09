import React from 'react';
import { useForm } from 'react-hook-form';
import RevealAnimation from '../animation/RevealAnimation';
import { Shield, CheckCircle } from 'lucide-react';

function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: '',
      designation: '',
      contactNumber: '',
      workEmail: '',
      budgetRange: '',
      projectDescription: '',
      captcha: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Here you can send the data to your backend
    alert('Thank you! We will get back to you soon.');
    reset();
  };

  const budgetOptions = [
    { value: '', label: 'Select a Budget Range' },
    { value: 'under-50k', label: 'Under $50k' },
    { value: '50k-100k', label: '$50k - $100k' },
    { value: '100k-250k', label: '$100k - $250k' },
    { value: '250k-500k', label: '$250k - $500k' },
    { value: 'above-500k', label: 'Above $500k' },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="mx-auto max-w-2xl rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/50 to-slate-900/50 p-8 md:p-12 backdrop-blur-xl">
            {/* Header */}
            <RevealAnimation delay={0.2}>
              <div className="mb-8 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Didn't Find What You Were Looking For?
                </h2>
                <p className="text-base md:text-lg text-gray-300">
                  We've got more answers waiting for you! If your question didn't make the list, don't hesitate to reach out.
                </p>
              </div>
            </RevealAnimation>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name and Designation Row */}
              <RevealAnimation delay={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      Name
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-transparent border-b-2 border-blue-400/50 px-0 py-2 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Designation */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      Designation
                    </label>
                    <input
                      {...register('designation', { required: 'Designation is required' })}
                      type="text"
                      placeholder="Enter Your Designation"
                      className="w-full bg-transparent border-b-2 border-blue-400/50 px-0 py-2 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                    {errors.designation && (
                      <p className="text-red-400 text-sm mt-1">{errors.designation.message}</p>
                    )}
                  </div>
                </div>
              </RevealAnimation>

              {/* Contact and Email Row */}
              <RevealAnimation delay={0.4}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Contact Number */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      Contact Number
                    </label>
                    <input
                      {...register('contactNumber', {
                        required: 'Contact number is required',
                        pattern: {
                          value: /^[0-9\-\+\(\)\s]*$/,
                          message: 'Invalid phone number',
                        },
                      })}
                      type="tel"
                      placeholder="Enter Your Number*"
                      className="w-full bg-transparent border-b-2 border-blue-400/50 px-0 py-2 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                    {errors.contactNumber && (
                      <p className="text-red-400 text-sm mt-1">{errors.contactNumber.message}</p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      Work Email
                    </label>
                    <input
                      {...register('workEmail', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      placeholder="Enter Your Email Address*"
                      className="w-full bg-transparent border-b-2 border-blue-400/50 px-0 py-2 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                    {errors.workEmail && (
                      <p className="text-red-400 text-sm mt-1">{errors.workEmail.message}</p>
                    )}
                  </div>
                </div>
              </RevealAnimation>

              {/* Budget Range */}
              <RevealAnimation delay={0.5}>
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Budget Range
                  </label>
                  <select
                    {...register('budgetRange', { required: 'Please select a budget range' })}
                    className="w-full bg-transparent border-b-2 border-blue-400/50 px-0 py-2 text-white focus:border-blue-400 focus:outline-none transition-colors appearance-none cursor-pointer bg-gradient-to-r from-blue-900/20 to-transparent"
                  >
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value} className="bg-slate-900 text-white">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.budgetRange && (
                    <p className="text-red-400 text-sm mt-1">{errors.budgetRange.message}</p>
                  )}
                </div>
              </RevealAnimation>

              {/* Project Description */}
              <RevealAnimation delay={0.6}>
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Describe Your Project
                  </label>
                  <textarea
                    {...register('projectDescription', {
                      required: 'Please describe your project',
                      minLength: {
                        value: 10,
                        message: 'Description must be at least 10 characters',
                      },
                    })}
                    placeholder="Tell us about your project..."
                    rows="4"
                    className="w-full bg-transparent border-2 border-blue-400/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                  />
                  {errors.projectDescription && (
                    <p className="text-red-400 text-sm mt-1">{errors.projectDescription.message}</p>
                  )}
                </div>
              </RevealAnimation>

              {/* NDA Protection */}
              <RevealAnimation delay={0.7}>
                <div className="flex items-center gap-3 rounded-lg bg-amber-500/20 border border-amber-500/40 px-4 py-3">
                  <Shield className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-amber-100">
                    Fast 2-minute response, fully <span className="font-bold">NDA-protected</span>.
                  </span>
                </div>
              </RevealAnimation>

              {/* Captcha */}
              <RevealAnimation delay={0.8}>
                <div className="flex items-center gap-4 py-4 border-b border-blue-400/30">
                  <span className="text-white font-semibold">6 + 6 =</span>
                  <input
                    {...register('captcha', {
                      required: 'Please verify',
                      validate: (value) => value === '12' || 'Incorrect answer',
                    })}
                    type="text"
                    placeholder=" "
                    className="w-20 bg-transparent border-2 border-blue-400/50 rounded-lg px-4 py-2 text-white text-center focus:border-blue-400 focus:outline-none transition-colors"
                  />
                  {errors.captcha && (
                    <p className="text-red-400 text-sm">{errors.captcha.message}</p>
                  )}
                </div>
              </RevealAnimation>

              {/* Submit Button */}
              <RevealAnimation delay={0.9}>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-white text-blue-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit
                </button>
              </RevealAnimation>
            </form>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}

export default ContactForm;
