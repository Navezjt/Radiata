import{_ as s,c as a,o as n,a as l}from"./app.f5db0dea.js";const y=JSON.parse('{"title":"Linux","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements","link":"#requirements","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]}],"relativePath":"installation/linux.md","lastUpdated":1676447442000}'),e={name:"installation/linux.md"},t=l(`<h1 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is much more difficult than the Docker installation method. Please use the Docker installation method if possible.</p></div><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-hidden="true">#</a></h2><ul><li><code>Node.js</code> &gt;= 18</li><li><code>Pnpm</code></li><li><code>Python</code> &gt;= 3.10</li><li><code>Pip</code></li><li><code>CUDA</code></li><li><code>cuDNN</code> &lt; 8.6.0</li><li><code>TensorRT</code> 8.5.x</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><ol><li>Clone Lsmith repository</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/ddPn08/Lsmith.git</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Install submodules</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Lsmith</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submodule</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--recursive</span></span>
<span class="line"></span></code></pre></div><ol start="3"><li>Enter the repository directory.</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Lsmith</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>Enter frontend directory and build frontend</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">frontend</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--out-dir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">../dist</span></span>
<span class="line"></span></code></pre></div><ol start="5"><li>Run <a href="http://launch.sh" target="_blank" rel="noreferrer">launch.sh</a> with the path to libnvinfer_plugin.so in the LD_PRELOAD variable.</li></ol><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">launch.sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">0.0.0.0</span></span>
<span class="line"></span></code></pre></div>`,15),o=[t];function i(p,c,r,d,h,C){return n(),a("div",null,o)}const A=s(e,[["render",i]]);export{y as __pageData,A as default};
