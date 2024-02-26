'use client';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Fiq = () => {
    return (
        <div className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
            <div className="p-10 md:p-4 md:px-20">
                <div className="text-3xl md:text-7xl font-bold text-black">
                    Hove questions ?
                </div>
                <div className="font-semibold text-3xl md:text-6xl text-transparent bg-gradient-to-r from-emerald-600 to-blue-50 bg-clip-text">
                    Get answers.
                </div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is Shohidul?</AccordionTrigger>
                        <AccordionContent>
                            Shohidul is a full fledge markting agency that speciallzes in branding. web design and digital marketing.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How ot start?</AccordionTrigger>
                        <AccordionContent>
                           You can start cantaciing us. We will get back ot you within 24 hours.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Pricing?</AccordionTrigger>
                        <AccordionContent>
                            We offer custom tallcred solutions for your business.Contackt us to get a quote
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Support?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                   
                </Accordion>

            </div>

        </div>
    )
}

export default Fiq
