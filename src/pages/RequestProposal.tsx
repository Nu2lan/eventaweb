import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check, Calendar, User, Building, Mail, Phone, FileText, ChevronDown } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const RequestProposal = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
    // Get them from https://dashboard.emailjs.com/
    const SERVICE_ID = 'service_paety8c';
    const CONTACT_TEMPLATE_ID = 'template_y91gngs';
    const AUTO_REPLY_TEMPLATE_ID = 'template_lvd6ju9';
    const PUBLIC_KEY = 'wMMIiTg34UYeodLh6';

    try {
      // 1. Send notification to admin (Contact Us Template)
      // This is the critical one. If this fails, we show an error.
      await emailjs.sendForm(SERVICE_ID, CONTACT_TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      // 2. Send auto-reply to user (Auto Reply Template)
      // We explicitly verify the user email is being passed correctly
      try {
        // Create a specific object for auto-reply if needed, or rely on form
        // Sometimes explicitly mapping the 'to_email' variable helps if configured in template
        const formData = new FormData(formRef.current);
        const templateParams = {
          user_name: formData.get('user_name'),
          user_email: formData.get('user_email'),
          // Add 'to_name' and 'reply_to' as standard EmailJS params just in case
          to_name: formData.get('user_name'),
          reply_to: formData.get('user_email'),
          message: formData.get('message'),
          // Ensure the template uses {{user_email}} in the "To Email" field
        };

        await emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, templateParams, {
          publicKey: PUBLIC_KEY,
        });
      } catch (autoReplyError) {
        console.warn('Auto-reply failed to send (but admin email was sent):', autoReplyError);
        // We continue to success screen even if auto-reply fails
      }

      setIsSuccess(true);
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to send proposal. Please check console for details or verify EmailJS configuration.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="h-screen w-full flex items-center justify-center px-4 bg-background dark:bg-primary transition-colors duration-300">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-8 text-center shadow-xl"
        >
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-white">{t('request.form.success_title')}</h2>
          <p className="text-muted-foreground dark:text-white/60 mb-8 text-lg">
            {t('request.form.success_desc')}
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-8 py-3 bg-secondary text-black font-bold rounded-lg hover:bg-secondary/90 transition-colors"
          >
            {t('hero.cta_primary')}
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-64px)] w-full bg-background dark:bg-primary transition-colors duration-300 relative flex items-center justify-center overflow-hidden py-4 sm:py-6 lg:py-8">

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-3 sm:mb-4 lg:mb-6"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-foreground dark:text-white">{t('request.title')}</h1>
          <p className="text-sm sm:text-base text-muted-foreground dark:text-white/60 max-w-2xl mx-auto">
            {t('request.subtitle')}
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/50 dark:bg-[#1E1F22] backdrop-blur-sm border border-black/5 dark:border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-2xl w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-4 sm:mb-5 lg:mb-6">
            <div className="space-y-1 sm:space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground dark:text-[#A8A8A8] flex items-center gap-2">
                <User className="w-3.5 h-3.5" /> {t('request.form.name')}
              </label>
              <input
                name="user_name"
                required
                type="text"
                className="w-full bg-transparent border-b border-black/10 dark:border-white/20 py-2 text-base focus:outline-none focus:border-secondary transition-colors text-foreground dark:text-[#D9D9D9] placeholder:text-muted-foreground/30"
                placeholder={t('request.form.placeholders.name')}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground dark:text-[#A8A8A8] flex items-center gap-2">
                <Building className="w-3.5 h-3.5" /> {t('request.form.company')}
              </label>
              <input
                name="company_name"
                required
                type="text"
                className="w-full bg-transparent border-b border-black/10 dark:border-white/20 py-2 text-base focus:outline-none focus:border-secondary transition-colors text-foreground dark:text-[#A8A8A8] placeholder:text-muted-foreground/30"
                placeholder={t('request.form.placeholders.company')}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground dark:text-[#A8A8A8] flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" /> {t('request.form.email')}
              </label>
              <input
                name="user_email"
                required
                type="email"
                className="w-full bg-transparent border-b border-black/10 dark:border-white/20 py-2 text-base focus:outline-none focus:border-secondary transition-colors text-foreground dark:text-[#D9D9D9] placeholder:text-muted-foreground/30"
                placeholder={t('request.form.placeholders.email')}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground dark:text-[#A8A8A8] flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" /> {t('request.form.phone')}
              </label>
              <input
                name="user_phone"
                required
                type="tel"
                className="w-full bg-transparent border-b border-black/10 dark:border-white/20 py-2 text-base focus:outline-none focus:border-secondary transition-colors text-foreground dark:text-[#D9D9D9] placeholder:text-muted-foreground/30"
                placeholder="+994 50 000 00 00"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground dark:text-[#A8A8A8] flex items-center gap-2">
                <ChevronDown className="w-3.5 h-3.5" /> {t('request.form.type')}
              </label>
              <div className="relative">
                <select
                  name="event_type"
                  className="w-full bg-transparent border-b border-black/10 dark:border-white/20 py-2 text-base focus:outline-none focus:border-secondary transition-colors text-foreground dark:text-[#A8A8A8] appearance-none cursor-pointer"
                >
                  <option className="bg-background dark:bg-[#A8A8A8] text-foreground dark:text-[#D9D9D9]" value="vip">{t('request.form.type_options.vip')}</option>
                  <option className="bg-background dark:bg-[#A8A8A8] text-foreground dark:text-[#D9D9D9]" value="gov">{t('request.form.type_options.gov')}</option>
                  <option className="bg-background dark:bg-[#A8A8A8] text-foreground dark:text-[#D9D9D9]" value="corporate">{t('request.form.type_options.corporate')}</option>
                  <option className="bg-background dark:bg-[#A8A8A8] text-foreground dark:text-[#D9D9D9]" value="summit">{t('request.form.type_options.summit')}</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground dark:text-[#A8A8A8] flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" /> {t('request.form.date')}
              </label>
              <input
                name="event_date"
                required
                type="date"
                className="w-full bg-transparent border-b border-black/10 dark:border-white/20 py-2 text-base focus:outline-none focus:border-secondary transition-colors text-foreground dark:text-[#A8A8A8] placeholder:text-muted-foreground/30 [&::-webkit-calendar-picker-indicator]:dark:invert [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-1 sm:space-y-1.5 mb-4 sm:mb-6 lg:mb-8">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground dark:text-[#A8A8A8] flex items-center gap-2">
              <FileText className="w-3.5 h-3.5" /> {t('request.form.description')}
            </label>
            <textarea
              name="message"
              required
              rows={2}
              className="w-full bg-transparent border-b border-black/10 dark:border-white/20 py-2 text-sm sm:text-base focus:outline-none focus:border-secondary transition-colors text-foreground dark:text-[#D9D9D9] placeholder:text-muted-foreground/30 resize-none"
              placeholder={t('request.form.placeholders.description')}
            />
          </div>

          <div className="text-center">
            <button
              disabled={isSubmitting}
              type="submit"
              className="px-10 py-3 bg-secondary text-black font-bold rounded-lg hover:bg-secondary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-base shadow-[0_0_20px_rgba(209,168,75,0.3)] hover:shadow-[0_0_30px_rgba(209,168,75,0.5)] w-full md:w-auto"
            >
              {isSubmitting ? t('request.form.sending') : t('request.form.submit')}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
