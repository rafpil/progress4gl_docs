import React from "react";

const StartPage = () => {
    return (
        <article className="article w-full">
            <div className="w-full">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="h1">
                        <span className="flex py-5">
                            Progress 4gl - uproszczona dokumentacja
                        </span>
                    </h1>
                    <br />
                    <h1 className="h1">
                        <span className="flex py-5">oraz</span>
                    </h1>
                    <br />
                    <h1 className="h1">
                        <span className="flex py-5">
                            MFG/PRO QAD 2009SE - podstawy obsługi
                        </span>
                    </h1>
                </div>
                <h2 className="h2">Stosowane oznaczenia:</h2>
                <ul className="ul">
                    <li>
                        <h3 className="h3">Słowa kluczowe</h3>
                        <kbd className="kbd">DEFINE</kbd> - deklaracja zmiennej kod
                    </li>
                    <li>
                        <h3 className="h3 !pb-0">Blok kodu</h3>
                        <div className="code-container !mb-0">
                            <div className="code-content">
                                <code className="code-style">
                                    DEFINE [ typ_zmiennej ] VARIABLE nazwa_zmiennej AS
                                    typ_wartości [ klauzule ].
                                </code>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div role="alert" className="alert alert-warning">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span>Jeśli zadeklarujemy wielkość np. 10, a zainicjalizujemy tylko 3
                            pierwsze elementy pozostałem otrzymają wartość ostatniej. </span>
                        </div>
                        <h3 className="h3 !pb-0">Uwagi</h3>
                        <div class="mark" role="alert">
                            <h3 class="h3 !pt-0">Uwaga:</h3>
                            <p className="p">
                                Jeśli zadeklarujemy wielkość np. 10, a zainicjalizujemy tylko 3
                                pierwsze elementy pozostałem otrzymają wartość ostatniej.
                            </p>
                            <div class="code-container">
                                <div class="code-content">
                                    <code class="code-style">
                                        1 DEFINE VARIABLE a AS CHARACTER EXTENT 10 INITIAL
                                        ["one","two","three"] NO-UNDO.
                                        <br />2 DISPLAY a. // one two three three three three three
                                        three three three
                                    </code>
                                </div>
                            </div>
                            <div className="mockup-code">
                                <pre data-prefix="1"><code>DEFINE VARIABLE a AS CHARACTER EXTENT 10 INITIAL
                                    ["one","two","three"] NO-UNDO.</code></pre>
                                <pre data-prefix="2"><code><span className="text-red-400">DISPLAY a.</span> // one two three three three three three
                                    three three three</code></pre>
                                {/* <pre data-prefix="3" className="bg-warning text-warning-content"><code>Error!</code></pre> */}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default StartPage;
