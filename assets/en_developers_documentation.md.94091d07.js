import{_ as e,c as a,o,R as t}from"./chunks/framework.f1d5a83d.js";const b=JSON.parse('{"title":"Documentation","description":"","frontmatter":{},"headers":[],"relativePath":"en/developers/documentation.md","lastUpdated":1682867362000}'),n={name:"en/developers/documentation.md"},s=t('<h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><p>This is will show you how to edit our documentation and how to properly contribute while outlining some rules for us.</p><h2 id="how-to-edit" tabindex="-1">How to edit <a class="header-anchor" href="#how-to-edit" aria-label="Permalink to &quot;How to edit&quot;">​</a></h2><p>All documentation is written in Markdown and is located in the <code>docs</code> folder. You can edit it directly on GitHub or you can clone the repository and edit it locally.</p><p>Edits on GitHub will create a Pull Request with the changes and they will be waiting for review.</p><p>Once the change is reviewed and approved it will be merged into the branch and will be deployed by our CI/CD pipeline.</p><h2 id="running-documentation-locally" tabindex="-1">Running documentation locally <a class="header-anchor" href="#running-documentation-locally" aria-label="Permalink to &quot;Running documentation locally&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>pnpm</code> can be installed using <code>npm install -g pnpm</code></p></div><p>Clone the repository</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/ddPn08/Radiata.git</span></span></code></pre></div><p>Install dependencies</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span></span></code></pre></div><p>Run the documentation</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:dev</span></span></code></pre></div><p>You should now be able to access the documentation on <code>http://localhost:5173/Radiata/</code></p>',15),l=[s];function i(c,p,d,r,h,u){return o(),a("div",null,l)}const y=e(n,[["render",i]]);export{b as __pageData,y as default};
