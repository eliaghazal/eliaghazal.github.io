<html>
<head>
<title>script.js</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style type="text/css">
.s0 { color: #bcbec4;}
.s1 { color: #bcbec4;}
.s2 { color: #6aab73;}
.s3 { color: #cf8e6d;}
.s4 { color: #7a7e85;}
</style>
</head>
<body bgcolor="#1e1f22">
<table CELLSPACING=0 CELLPADDING=5 COLS=1 WIDTH="100%" BGCOLOR="#606060" >
<tr><td><center>
<font face="Arial, Helvetica" color="#000000">
script.js</font>
</center></td></tr></table>
<pre><span class="s0">document</span><span class="s1">.</span><span class="s0">addEventListener</span><span class="s1">(</span><span class="s2">&quot;DOMContentLoaded&quot;</span><span class="s1">, </span><span class="s3">function</span><span class="s1">() {</span>
    <span class="s4">// Lightbox functionality</span>
    <span class="s3">const </span><span class="s0">lightboxTriggers </span><span class="s1">= </span><span class="s0">document</span><span class="s1">.</span><span class="s0">querySelectorAll</span><span class="s1">(</span><span class="s2">'.lightbox-trigger'</span><span class="s1">);</span>
    <span class="s3">const </span><span class="s0">modal </span><span class="s1">= </span><span class="s0">document</span><span class="s1">.</span><span class="s0">getElementById</span><span class="s1">(</span><span class="s2">'lightbox-modal'</span><span class="s1">);</span>
    <span class="s3">const </span><span class="s0">modalImg </span><span class="s1">= </span><span class="s0">document</span><span class="s1">.</span><span class="s0">getElementById</span><span class="s1">(</span><span class="s2">'lightbox-img'</span><span class="s1">);</span>
    <span class="s3">const </span><span class="s0">closeBtn </span><span class="s1">= </span><span class="s0">document</span><span class="s1">.</span><span class="s0">querySelector</span><span class="s1">(</span><span class="s2">'.lightbox-modal .close'</span><span class="s1">);</span>

    <span class="s0">lightboxTriggers</span><span class="s1">.</span><span class="s0">forEach</span><span class="s1">(</span><span class="s0">item </span><span class="s1">=&gt; {</span>
        <span class="s0">item</span><span class="s1">.</span><span class="s0">addEventListener</span><span class="s1">(</span><span class="s2">'click'</span><span class="s1">, </span><span class="s3">function</span><span class="s1">() {</span>
            <span class="s0">modal</span><span class="s1">.</span><span class="s0">style</span><span class="s1">.</span><span class="s0">display </span><span class="s1">= </span><span class="s2">&quot;block&quot;</span><span class="s1">;</span>
            <span class="s0">modalImg</span><span class="s1">.</span><span class="s0">src </span><span class="s1">= </span><span class="s3">this</span><span class="s1">.</span><span class="s0">src</span><span class="s1">;</span>
        <span class="s1">});</span>
    <span class="s1">});</span>

    <span class="s3">if </span><span class="s1">(</span><span class="s0">closeBtn</span><span class="s1">) {</span>
        <span class="s0">closeBtn</span><span class="s1">.</span><span class="s0">addEventListener</span><span class="s1">(</span><span class="s2">'click'</span><span class="s1">, </span><span class="s3">function</span><span class="s1">() {</span>
            <span class="s0">modal</span><span class="s1">.</span><span class="s0">style</span><span class="s1">.</span><span class="s0">display </span><span class="s1">= </span><span class="s2">&quot;none&quot;</span><span class="s1">;</span>
        <span class="s1">});</span>
    <span class="s1">}</span>

    <span class="s0">modal</span><span class="s1">.</span><span class="s0">addEventListener</span><span class="s1">(</span><span class="s2">'click'</span><span class="s1">, </span><span class="s3">function</span><span class="s1">(</span><span class="s0">e</span><span class="s1">) {</span>
        <span class="s3">if </span><span class="s1">(</span><span class="s0">e</span><span class="s1">.</span><span class="s0">target </span><span class="s1">=== </span><span class="s0">modal</span><span class="s1">) {</span>
            <span class="s0">modal</span><span class="s1">.</span><span class="s0">style</span><span class="s1">.</span><span class="s0">display </span><span class="s1">= </span><span class="s2">&quot;none&quot;</span><span class="s1">;</span>
        <span class="s1">}</span>
    <span class="s1">});</span>

    <span class="s4">// Contact form submission (demo functionality)</span>
    <span class="s3">const </span><span class="s0">contactForm </span><span class="s1">= </span><span class="s0">document</span><span class="s1">.</span><span class="s0">getElementById</span><span class="s1">(</span><span class="s2">'contact-form'</span><span class="s1">);</span>
    <span class="s3">if </span><span class="s1">(</span><span class="s0">contactForm</span><span class="s1">) {</span>
        <span class="s0">contactForm</span><span class="s1">.</span><span class="s0">addEventListener</span><span class="s1">(</span><span class="s2">'submit'</span><span class="s1">, </span><span class="s3">function</span><span class="s1">(</span><span class="s0">e</span><span class="s1">) {</span>
            <span class="s0">e</span><span class="s1">.</span><span class="s0">preventDefault</span><span class="s1">();</span>
            <span class="s0">alert</span><span class="s1">(</span><span class="s2">&quot;Thank you for your message!&quot;</span><span class="s1">);</span>
            <span class="s0">contactForm</span><span class="s1">.</span><span class="s0">reset</span><span class="s1">();</span>
        <span class="s1">});</span>
    <span class="s1">}</span>
<span class="s1">});</span>
</pre>
</body>
</html>