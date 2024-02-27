'use client';
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form"
import * as z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight, PiSmiley } from "react-icons/pi";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "./nabbar/navbar";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum([
    "Evaluate shohidul for my company",
    "Learn More",
    "Get a Quote",
    "Other",
  ]),
  company_size: z.enum([
    '1-10',
    '11-50',
    '51-200',
    '201-500',
    '501-1000',
    '1000+'
  ]),
  info: z.string(),

});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string
  company_name: string;
  help: | "Evaluate shohidul for my company" | "Learn More" | "Get a Quote" | "Other";
  company_size: | '1-10' | '11-50' | '51-200' | '201-500' | '501-1000' | '1000+';
  info: string;
  terms: boolean;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Learn More",
      company_size: "1-10",
      info: "",
    }
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Something went wrong');
      }
      setSubmitted(true);

    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Error",
      });

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.2] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={() => { }}
        scrollToGraphicDesign={() => { }}
        scrollToshopifyStoresDesign={() => { }}
        scrollToBrandsDesing={() => { }}
      />
      <div className="md:flex justify-center py-20 px-8" >
        <div>
          <div className="text-5xl font-medium md:w-4/5 text-center bg-clip-text text-transparent bg-gradient-to-b flex items-center justify-center  from-purple-500  bg-gray-100 bg-opacity-50 ">
            Contact our sales team
          </div>
          <div className="py-4 text-gray-500">
            Let&apos;s talk about how Notion can help your team work better.
          </div>
          <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-lg my-4">
            <div className="flex gap-4 border-b">
              <PiCheckLight className="text-2xl" />
              <div className="font-normal pb-4 w-80">
                Enterprise features to securely manage user access and security.
              </div>

            </div>
            <div className="flex gap-4 border-b">
              <PiCheckLight className="text-2xl" />
              <div className="font-normal pb-4 w-80">
                One flexble tool for your entire company to share knowledge,ship projects, and collaborate.
              </div>
            </div>
            <div className="flex gap-4 border-b">
              <PiCheckLight className="text-2xl" />
              <div className="font-normal pb-4 w-80">
                Dedicated support to work with you on your setup and help you build the best for your company.
              </div>
            </div>
          </div>
        </div>
       
        <Form {...form}>
          {!submitted ? (
            <div className=" border  rounded-3xl px-6 py-4">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="md:flex items-center gap-6">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (

                    <FormItem className="items-center justify-center w-full">
                      <FormLabel className="text-white">
                        First name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="enter your first name" type="text"/>
                      </FormControl>

                    </FormItem>
                  )} />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (

                    <FormItem className="items-center justify-center w-full">
                      <FormLabel className="text-white">
                        Last name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="enter your last name" type="text"/>
                      </FormControl>

                    </FormItem>
                  )} />

              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (

                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-white">
                      Work email *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="enter your email" type="text"/>
                    </FormControl>

                  </FormItem>
                )} />

              <FormField
                control={form.control}
                name="job_title"
                render={({ field }) => (

                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-white">
                      Job title *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="enter your job title" type="text"/>
                    </FormControl>

                  </FormItem>
                )} />

              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (

                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-white">
                      Company name  *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="enter your Company name" type="text"/>
                    </FormControl>

                  </FormItem>
                )} />


              <FormField
                control={form.control}
                name="help"
                render={({ field }) => (

                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className='text-white'>
                      How can we help ?
                    </FormLabel>

                    <Select onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <div className="flex gap-4">
                          <SelectItem value="Evaluate shohidul for my company">Evaluate shohidul for my company</SelectItem>
                        </div>
                        <SelectItem value="Learn More">Learn More</SelectItem>
                        <SelectItem value="Get a Quote">Get a Quote</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>

                    </Select>

                  </FormItem>
                )} />

              <FormField
                control={form.control}
                name="company_size"
                render={({ field }) => (

                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className='text-white'>
                      Company size *
                    </FormLabel>

                    <Select onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <div className="flex gap-4">
                          <SelectItem value="1-10">1-10</SelectItem>
                        </div>
                        <SelectItem value="11-50">1-50</SelectItem>
                        <SelectItem value="51-200">51-200</SelectItem>
                        <SelectItem value="201-500">201-500</SelectItem>
                        <SelectItem value="501-1000">501-1000</SelectItem>
                        <SelectItem value="1000+">1000+</SelectItem>
                      </SelectContent>

                    </Select>

                  </FormItem>
                )} />




              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (

                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className='text-white'>
                      Anything else ?
                    </FormLabel>
                    <FormControl>
                      <Textarea style={{ height: '100px' }} {...field} placeholder="please text now" />

                    </FormControl>

                  </FormItem>
                )} />

              <div className="flex gap-4 items-center">
                <div>
                  <Checkbox className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                </div>
                <div className="text-xs font-light md:w-3/4 mb-1 text-white">
                  I agree to Notion&apos;s sending marketing communications related to Notion
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button type="submit"
                  className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  disabled={loading}
                  onClick={() => form.handleSubmit(onSubmit)}
                >
                  Submit
                </Button>

              </div>

            </form>

            </div>

          ) : (

            <>
              <div className="text-xl md:text-2xl flex items-center justify-center flex-col px-8">
                <div className="w-80">
                  <Image
                    src="/image/check.gif"
                    alt="image"
                    width={1000}
                    height={1000}
                    className="mx-auto"
                  />
                  <div className="text-gray-500 font-light text-center justify-center mx-auto py-10">
                    we&apos;ve received your inquiry and will be contacting you via email shortly.
                  </div>

                </div>
              </div>

            </>
          )}

        </Form>
       

      </div>

    </div>
  )
}



