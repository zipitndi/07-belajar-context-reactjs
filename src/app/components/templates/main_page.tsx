'use client';
import Heading from "../atoms/heading";
import Section from "../atoms/section";

export default function MainPage() {
    return (
        <Section>
            <Heading >Title</Heading>
            <Section>
                <Heading >About</Heading>
                <Heading >Photos</Heading>
                <Heading >Videos</Heading>
                <Section>
                    <Heading >Sub-heading</Heading>
                    <Heading >Sub-heading</Heading>
                    <Heading >Sub-heading</Heading>
                    <Section>
                        <Heading >Sub-sub-heading</Heading>
                        <Heading >Sub-sub-heading</Heading>
                        <Heading >Sub-sub-heading</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>
    );
}