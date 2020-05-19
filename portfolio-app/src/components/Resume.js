/*
    src/components/Projects.js
*/
import resume from '../res/resume.pdf';
import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { Flex, Button, Box, Heading, Link } from 'rebass';
import { motion } from "framer-motion";
import AnchorLink from 'react-anchor-link-smooth-scroll'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/* TODO figure out lazy loading from github hosted resume */

function Resume(props) {

    // Used for pdf?
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    
    return (
        <div>
        <Flex
            alignItems='center'
            px={3}
            py={4}
            bg='muted'>
            <h1 className="headers">Resume</h1>
            <Box mx='auto' />
            <Link href="https://github.com/Cougargriff/ResumeLatex/raw/master/resume_curr.pdf">
                <Button ml={2} variant='primary' 
                    sx={{
                    backgroundColor: '#77dd77',
                    ':hover': {
                    backgroundColor: 'green',}
                    
                }}>Download
                </Button>
            </Link>
        </Flex>
            <center>
                <Document
                    file={resume}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page renderMode="svg" pageNumber={pageNumber} />
                </Document>
            </center>
            <section className="divFive">
                <Flex alignItems="center" px={3} py={4} bg="muted">
                <Box mx="auto" />
                <AnchorLink href='#top'>
                    <Button ml={2} variant='primary' 
                            sx={{
                                backgroundColor: '#ffb347',
                            ':hover': {
                            backgroundColor: 'red',}
                        }}>Back to Top
                    </Button>
                </AnchorLink>
                </Flex>
            </section>
      </div>
    )
}

export default Resume;