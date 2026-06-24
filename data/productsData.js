const productsData = [
  {
    slug: "accessories",
    title: "Accessories",
    categories: [
      {
        name: "Barrel Piece",
        description: "Premium grade heavy-wall industrial barrel pieces precision-threaded for secure linear pipe extensions and seamless fluid distribution. Manufactured from high-tensile materials to resist scaling and high operational pressures in demanding pipeline architectures.",
        images: [
          "/images/products/accessories/barrel-piece/1.jpg",
          "/images/products/accessories/barrel-piece/2.jpg",
          "/images/products/accessories/barrel-piece/3.jpg"
        ]
      },
      {
        name: "BRACKET",
        description: "Heavy-duty load-bearing structural mounting brackets engineered to provide rigid reinforcement and secure alignment for heavy pipelines and equipment arrays. Features an anti-corrosive finish suitable for high-vibration industrial and outdoor plant environments.",
        images: [
          "/images/products/accessories/bracket/1.jpg",
          "/images/products/accessories/bracket/2.jpg"
        ]
      },
      {
        name: "Chilly Support",
        description: "Advanced structural hardware support systems designed to stabilize vertical and horizontal line segments under dynamic load cycles. Optimizes weight distribution across frameworks, minimizing fatigue on primary junctions and manifold headers.",
        images: [
          "/images/products/accessories/chilly-support/1.jpg",
          "/images/products/accessories/chilly-support/2.jpg",
          "/images/products/accessories/chilly-support/3.jpg"
        ]
      },
      {
        name: "Dummy plate",
        description: "Industrial-grade high-thickness blanking dummy plates designed for temporary or permanent line isolation during pressure testing and system maintenance. Built to full structural safety codes to prevent hazardous fluid bypass under peak pressures.",
        images: [
          "/images/products/accessories/dummy-plate/1.jpg",
          "/images/products/accessories/dummy-plate/2.jpg"
        ]
      },
      {
        name: "Elbow",
        description: "High-end durable flow-directional pipeline elbows precision-molded to facilitate low-friction fluid dynamics at critical turns. Engineered to maintain consistent wall thickness across radius bends, mitigating localized wear and pressure drop risk.",
        images: [
          "/images/products/accessories/elbow/1.jpg",
          "/images/products/accessories/elbow/2.jpg",
          "/images/products/accessories/elbow/3.jpg",
          "/images/products/accessories/elbow/4.jpg",
          "/images/products/accessories/elbow/5.jpg",
          "/images/products/accessories/elbow/6.jpg"
        ]
      },
      {
        name: "Fastners",
        description: "Heavy-duty, high-tensile industrial fastening bolts, nuts, and anchoring sets optimized for structural and high-pressure flange assemblies. Coated with specialized treatments to withstand extreme torque specs and aggressive environmental degradation.",
        images: [
          "/images/products/accessories/fastners/1.jpg",
          "/images/products/accessories/fastners/2.jpg",
          "/images/products/accessories/fastners/3.jpg",
          "/images/products/accessories/fastners/4.jpg",
          "/images/products/accessories/fastners/5.jpg",
          "/images/products/accessories/fastners/6.jpg"
        ]
      },
      {
        name: "Flanges",
        description: "Premium-quality machined pipe connection flanges configured for precise alignment and robust bolt-circle integration. Ensures absolute leak-proof sealing surfaces across high-pressure water, chemical, and fire suppression distribution systems.",
        images: [
          "/images/products/accessories/flanges/1.jpg",
          "/images/products/accessories/flanges/2.jpg",
          "/images/products/accessories/flanges/3.jpg",
          "/images/products/accessories/flanges/4.jpg",
          "/images/products/accessories/flanges/5.jpg",
          "/images/products/accessories/flanges/6.jpg",
          "/images/products/accessories/flanges/7.jpg"
        ]
      }
    ]
  },
  {
    slug: "alarm-system",
    title: "Alarm System",
    categories: [
      {
        name: "Addressable Common Base DB-01",
        description: "High-fidelity intelligent addressable detector common base designed for seamless communication integration with primary fire alarm control panels. Features robust termination terminals and a low-profile twist-lock mechanism for quick sensor head deployment.",
        images: [
          "/images/products/alarm-system/db01.jpg"
        ]
      },
      {
        name: "Beam Detector",
        description: "Long-range optical linear smoke beam detector engineered for large open areas like warehouses, atriums, and industrial plants. Utilizes advanced signal processing to provide early warning detection while actively mitigating false alarms caused by environmental shifts.",
        images: [
          "/images/products/alarm-system/beam-detector.jpg"
        ]
      }
    ]
  },
  {
    slug: "branch-pipes",
    title: "Branch Pipes",
    categories: [
      {
        name: "Standard Branch Pipe",
        description: "High-pressure, heavy-duty industrial firefighting branch pipe nozzle engineered for optimal hydraulic stream control. Designed to efficiently project high-velocity jet and spray streams, ensuring maximum heat absorption and rapid flame suppression capabilities.",
        images: [
          "/images/products/branch-pipes/standard-branch-pipe/1.jpg",
          "/images/products/branch-pipes/standard-branch-pipe/2.jpg",
          "/images/products/branch-pipes/standard-branch-pipe/3.jpg",
          "/images/products/branch-pipes/standard-branch-pipe/4.jpg",
          "/images/products/branch-pipes/standard-branch-pipe/5.jpg",
          "/images/products/branch-pipes/standard-branch-pipe/6.jpg",
          "/images/products/branch-pipes/standard-branch-pipe/7.jpg",
          "/images/products/branch-pipes/standard-branch-pipe/8.jpg",
          "/images/products/branch-pipes/standard-branch-pipe/9.jpg",
          "/images/products/branch-pipes/standard-branch-pipe/10.jpg"
        ]
      }
    ]
  },
  {
    slug: "canvas-hose",
    title: "Canvas Hose",
    categories: [
      {
        name: "Coupling",
        description: "Heavy-duty synthetic delivery and canvas hose end coupling hardware matching global standard specifications. Machined for instant, reliable interlocking under critical emergency response timelines to prevent sudden fluid pressure loss.",
        images: [
          "/images/products/canvas-hose/coupling/1.jpg"
        ]
      },
      {
        name: "CP Hose (RHINO)",
        description: "Premium high-pressure RHINO model controlled-percolation canvas hose engineered with a reinforced weave pattern. Ideal for demanding emergency firefighting lines and heavy transfer applications requiring structural resiliency against abrasion and punctures.",
        images: [
          "/images/products/canvas-hose/cp-hose-rhino.jpg"
        ]
      },
      {
        name: "CP Hose + SS Coupling (ISI)",
        description: "ISI-certified high-performance canvas delivery hose assembly pre-fitted with robust, corrosion-resistant stainless steel interlocking couplings. Designed to fulfill strict national safety standards for structural municipal and heavy industrial deployment profiles.",
        images: [
          "/images/products/canvas-hose/cp-hose-ss-coupling-isi.jpg"
        ]
      },
      {
        name: "CP Hose + SS Coupling (NON ISI)",
        description: "Commercial-standard non-ISI variation canvas layout offering high flexibility and balanced pressure management. Factory equipped with a reliable stainless steel coupling matrix suitable for secondary utility functions, construction sites, and washdown systems.",
        images: [
          "/images/products/canvas-hose/cp-hose-ss-coupling-non-isi.jpg"
        ]
      },
      {
        name: "RRL Hose (FORCE)",
        description: "High-durability FORCE production specification Reinforced Rubber-Lined (RRL) delivery hose. Designed to minimize frictional flow losses while offering superior structural resistance against heat, ozone, weathering, and intense operational kink stress.",
        images: [
          "/images/products/canvas-hose/rrl-hose-force.jpg"
        ]
      },
      {
        name: "RRL Hose (RHINO)",
        description: "Heavy engineering grade RHINO construction model RRL pipeline deployment hose. Built to sustain continuous rough handling over demanding terrain, utilizing a robust internal synthetic rubber lining and tough external fabric protective armor.",
        images: [
          "/images/products/canvas-hose/rrl-hose-rhino.jpg"
        ]
      },
      {
        name: "RRL Hose + GM Coupling (ISI)",
        description: "ISI certified, high-tensile RRL fire hose assembly completely fitted with precision-machined gunmetal coupling hardware. Gunmetal configuration provides unmatched spark-free security and superior resistance against marine or chemical brackish water environments.",
        images: [
          "/images/products/canvas-hose/rrl-hose-gm-coupling-isi.jpg"
        ]
      },
      {
        name: "RRL Hose + SS ISI Coupling (DOZZ)",
        description: "DOZZ industrial pattern reinforced rubber-lined configuration fixed with genuine stainless steel ISI fittings. Engineered for long-term standby readiness in structural fire cabinets, ensuring immediate high-volume deployment whenever triggered.",
        images: [
          "/images/products/canvas-hose/rrl-hose-ss-isi-coupling-dozz.jpg"
        ]
      },
      {
        name: "RRL Hose + SS ISI Coupling (NEWAGE)",
        description: "NEWAGE framework design RRL line setup fully assembled with robust stainless steel couplings. Crafted for extreme burst pressure parameters, making it an ideal choice for petro-chemical complexes, high-rise buildings, and complex infrastructural layouts.",
        images: [
          "/images/products/canvas-hose/rrl-hose-ss-isi-coupling-newage.jpg"
        ]
      },
      {
        name: "RRL Hose TYPE B + GM Coupling (ISI)",
        description: "Type B specialized layout RRL professional fire hose layout featuring certified gunmetal elements. Offers exceptional external coating parameters that resist moisture absorption, fungal rot, and deep contact abrasions during heavy fire control movements.",
        images: [
          "/images/products/canvas-hose/rrl-hose-type-b-gm-coupling.jpg"
        ]
      },
      {
        name: "RRL Hose TYPE B + SS Coupling (ISI)",
        description: "High-performance Type B configuration RRL line built with high-tensile stainless steel coupling accents. Features advanced technical specifications engineered for rapid drying and minimal maintenance over an extended service lifecycle.",
        images: [
          "/images/products/canvas-hose/rrl-hose-type-b-ss-coupling.jpg"
        ]
      }
    ]
  },
  {
    slug: "fire-extinguisher",
    title: "Fire Extinguisher",
    categories: [
      {
        name: "Fire Extinguisher Spares",
        description: "High-performance spare component replacement kits including pressure gauges, safety pins, discharge hoses, wall brackets, and internal siphon tubes engineered for immediate system restoration and absolute safety enforcement.",
        images: [
          "/images/products/fire-extinguisher/fire-extinguisher-spares/1.jpg"
        ]
      },
      {
        name: "Fire Ball (AQUA)",
        description: "AQUA automatic self-activating rapid reaction fire suppression ball device. Triggers automatically within seconds of direct contact with open flame, dispersing specialized dry chemical powders to flood and suppress localized Class A, B, and C hazard areas.",
        images: [
          "/images/products/fire-extinguisher/fire-ball-aqua.jpg"
        ]
      },
      {
        name: "Fire Ext ABC 1 Kg (SAFETY ONE)",
        description: "SAFETY ONE ultra-portable 1 Kilogram dry chemical powder multi-purpose unit framework. Designed for compact vehicular or residential applications, providing instantaneous suppression of localized electrical, liquid, and solid structural fires.",
        images: [
          "/images/products/fire-extinguisher/fire-ext-abc-1kg-safety-one.jpg"
        ]
      },
      {
        name: "Fire Ext ABC 2 Kg (SAFETY ONE)",
        description: "SAFETY ONE 2 Kilogram standard portable utility fire unit layout. Provides a highly effective balance of lightweight mobility and expanded chemical fire knockdown capacity, featuring an easy-to-read built-in pressure monitor.",
        images: [
          "/images/products/fire-extinguisher/fire-ext-abc-2kg-safety-one.jpg"
        ]
      },
      {
        name: "Fire Ext ABC 4 Kg (SAFETY ONE)",
        description: "SAFETY ONE 4 Kilogram optimized pressure balance execution unit configuration. Offers heavy-duty fire protection for commercial offices, commercial zones, and small workshops, ensuring reliable discharge flow metrics during critical response windows.",
        images: [
          "/images/products/fire-extinguisher/fire-ext-abc-4kg-safety-one.jpg"
        ]
      },
      {
        name: "Fire Ext ABC 4 Kg (SAFEX)",
        description: "SAFEX premium industrial grade 4 Kilogram high deployment rate system structure. Engineered using heavy-wall metal cylinders and certified squeeze-grip valves to ensure long-term shelf life and dependable operation in challenging warehouse environments.",
        images: [
          "/images/products/fire-extinguisher/fire-ext-abc-4kg-safex.jpg"
        ]
      },
      {
        name: "Fire Ext ABC 9 Kg (SAFETY ONE)",
        description: "SAFETY ONE heavy commercial duty 9 Kilogram volume fire control framework. Delivers a high-volume chemical agent discharge stream engineered to suppress large-scale multi-class industrial fire hazards across expansive processing shop floors.",
        images: [
          "/images/products/fire-extinguisher/fire-ext-abc-9kg-safety-one.jpg"
        ]
      },
      {
        name: "Fire Ext ABC 9 Kg (SAFEX)",
        description: "SAFEX premium performance series high-capacity 9 Kilogram deployment configuration. Built specifically for demanding corporate infrastructures and dangerous manufacturing locations, providing maximum coverage and deep chemical flame penetration.",
        images: [
          "/images/products/fire-extinguisher/fire-ext-abc-9kg-safex.jpg"
        ]
      },
      {
        name: "Fire Ext ABC 2 Kg (SAFEX)",
        description: "SAFEX 2 Kilogram concentrated protective class industrial deployment layout. Features a highly refined ABC dry chemical powder charge that ensures swift suppression of localized electrical or solvent-based fires within mechanical utilities.",
        images: [
          "/images/products/fire-extinguisher/fire-ext-abc-2kg-safex.jpg"
        ]
      },
      {
        name: "Fire Ext ABC 6 Kg (SAFETY ONE)",
        description: "SAFETY ONE mid-tier commercial capability 6 Kilogram pressure configuration layout. Perfectly scaled to meet safety regulations for medium-sized retail environments, production areas, and multi-story institutional facilities.",
        images: [
          "/images/products/fire-extinguisher/fire-ext-abc-6kg-safety-one.jpg"
        ]
      },
      {
        name: "Fire Ext Clean Agent Modular 5 KG",
        description: "Automatic ceiling-mounted 5 Kilogram clean agent dynamic gas suppression module. Uses advanced thermal glass bulb triggers to instantly release residue-free fire suppressing gas, safeguarding critical server cabinets and electrical control hubs.",
        images: [
          "/images/products/fire-extinguisher/fire-ext-clean-agent-modular-5kg.jpg"
        ]
      },
      {
        name: "Fire Ext Clean Agent Modular 10 KG",
        description: "High-yield automated 10 Kilogram ceiling modular system with precision thermal detection. Provides autonomous, non-conductive 24/7 protection over sensitive digital equipment rooms, mitigating hazards without causing collateral hardware damage.",
        images: [
          "/images/products/fire-extinguisher/fire-ext-clean-agent-modular-10kg.jpg"
        ]
      },
      {
        name: "Fire Ext Clean Agent Modular 15 KG",
        description: "Maximum density data center and server room protection 15 Kilogram clean agent component design. Engineered to uniformly flood large enclosed electrical infrastructure zones upon thermal activation, neutralizing fire threats instantly.",
        images: [
          "/images/products/fire-extinguisher/fire-ext-clean-agent-modular-15kg.jpg"
        ]
      },
      {
        name: "Fire Ext Clean Agent Portable 4 KG",
        description: "Handheld residue-free clean agent protection kit built for sensitive equipment storage locations, control rooms, and laboratories. Discharges an eco-friendly gas that blankets the flame front without leaving behind any corrosive or conductive powders.",
        images: [
          "/images/products/fire-extinguisher/fire-ext-clean-agent-portable-4kg.jpg"
        ]
      },
      {
        name: "Fire Ext Mechanical Foam 9 Ltr",
        description: "9 Liter capacity mechanical foam suppression engine engineered for rapid deployment against Class B liquid fuel and solvent hazards. Creates an airtight aqueous film layer that blank-smothers the fuel surface to prevent vapor reignition.",
        images: [
          "/images/products/fire-extinguisher/fire-ext-mechanical-foam-9ltr.jpg"
        ]
      },
      {
        name: "Fire Ext Mechanical Foam 45 Ltr",
        description: "High-capacity wheeled trolley-mounted 45 Liter mechanical foam heavy facility assembly. Engineered for rapid transit across fuel depots, paint booths, and petrochemical handling zones, delivering an extensive high-expansion foam blanket.",
        images: [
          "/images/products/fire-extinguisher/fire-ext-mechanical-foam-45ltr.jpg"
        ]
      }
    ]
  },
  {
    slug: "fire-inlet",
    title: "Fire Inlet",
    categories: [
      {
        name: "Standard Fire Inlet Module",
        description: "Heavy-duty brass and cast-iron breeching inlet systems engineered for structural connection to external dry riser fire mains. Features non-return valves and instantaneous male connection interfaces allowing emergency fire tenders to inject water directly into internal lines.",
        images: [
          "/images/products/fire-inlet/standard-inlet/1.jpg",
           "/images/products/fire-inlet/standard-inlet/2.jpg",
           "/images/products/fire-inlet/standard-inlet/3.jpg",
           "/images/products/fire-inlet/standard-inlet/4.jpg",
           "/images/products/fire-inlet/standard-inlet/5.jpg"
           


           

        ]
      }
    ]
  },
  {
    slug: "flow-switch",
    title: "Flow Switch",
    categories: [
      {
        name: "Flow Switch",
        description: "High-sensitivity pipeline fluid flow tracking relay switch mechanism designed to detect automatic sprinkler activation. Sends immediate electronic telemetry to the central fire panel upon sensing constant water movement within monitored pipeline loops.",
        images: [
          "/images/products/flow-switch/1.jpg",
            "/images/products/flow-switch/2.jpg",
              "/images/products/flow-switch/3.jpg",
                "/images/products/flow-switch/4.jpg",
                  "/images/products/flow-switch/5.jpg",
                    "/images/products/flow-switch/6.jpg"
        ]
      }
    ]
  },
  {
    slug: "hardware-and-tools",
    title: "Hardware & Tools",
    categories: [
      {
        name: "Nut Bolt",
        description: "High-tensile strength, heavy-duty nuts and bolts construction sets engineered specifically for pipe clamps, flange alignments, and structural bracing components. Thread profiles are optimized to maintain tight clamping pressure under vibration.",
        images: [
          "/images/products/hardware-and-tools/nut-bolt/1.jpg",
          "/images/products/hardware-and-tools/nut-bolt/2.jpg",
          "/images/products/hardware-and-tools/nut-bolt/3.jpg",
          "/images/products/hardware-and-tools/nut-bolt/4.jpg",
          "/images/products/hardware-and-tools/nut-bolt/5.jpg",
          "/images/products/hardware-and-tools/nut-bolt/6.jpg",
          "/images/products/hardware-and-tools/nut-bolt/7.jpg"
        ]
      },
      {
        name: "Reducer",
        description: "Precision-engineered concentric or eccentric structural pipeline reducer module assembly. Formed to guarantee smooth fluid transitions between varying pipe diameters while maintaining uniform wall thickness and minimizing turbulences.",
        images: [
          "/images/products/hardware-and-tools/reducer/1.jpg",
           "/images/products/hardware-and-tools/reducer/2.jpg",
            "/images/products/hardware-and-tools/reducer/3.jpg",
             "/images/products/hardware-and-tools/reducer/4.jpg"
        ]
      },
      {
        name: "Rubber Gasket",
        description: "Thermal-resistant, watertight premium rubber seal washers engineered to sit perfectly within flange interfaces. Formulated to resist compression-set, chemical breakdown, and degradation across varying pipeline temperature fluctuations.",
        images: [
          "/images/products/hardware-and-tools/rubber-gasket/1.jpg",
          "/images/products/hardware-and-tools/rubber-gasket/2.jpg",
          "/images/products/hardware-and-tools/rubber-gasket/3.jpg",
          "/images/products/hardware-and-tools/rubber-gasket/4.jpg"
        ]
      },
      {
        name: "Socket",
        description: "Industrial-strength linking connection adapter pipe coupling joints designed for inline socket-welded or threaded joints. Forged from robust metal stock to provide exceptional mechanical rigidity to structural piping connections.",
        images: [
          "/images/products/hardware-and-tools/socket/1.jpg",
           "/images/products/hardware-and-tools/socket/2.jpg",
            "/images/products/hardware-and-tools/socket/3.jpg",
             "/images/products/hardware-and-tools/socket/4.jpg"
        ]
      },
      {
        name: "Socketweld Fitting",
        description: "High-pressure pipeline safety socket weld interface profiles designed to ensure leak-free linear and multi-directional transitions. Ideal for permanent, high-integrity industrial pipeline installations carrying hazardous or high-velocity fluid media.",
        images: [
          "/images/products/hardware-and-tools/socketweld-fitting/1.jpg",
          "/images/products/hardware-and-tools/socketweld-fitting/2.jpg",
          "/images/products/hardware-and-tools/socketweld-fitting/3.jpg"
        ]
      },
      {
        name: "Tee",
        description: "Three-way distribution pipe layout fitting standard engineered to branch off main headers at perfect 90-degree paths. Manufactured to full structural thickness guidelines to absorb mechanical fluid stresses at cross junctions.",
        images: [
          "/images/products/hardware-and-tools/tee/1.jpg",
           "/images/products/hardware-and-tools/tee/2.jpg"
        ]
      },
      {
        name: "Threaded Rod",
        description: "Continuous pattern supporting structural steel threaded rods engineered for overhead pipe hanging and modular framing support structures. Easily cut and adapted to custom heights using standardized industrial channel nuts and drop-in anchors.",
        images: [
          "/images/products/hardware-and-tools/threaded-rod/1.jpg",
           "/images/products/hardware-and-tools/threaded-rod/2.jpg"
        ]
      },
      {
        name: "U Clamp",
        description: "Heavy format mechanical plumbing suspension U clamp models designed to firmly anchor fluid pipelines to support beams or strut channels. Features robust threading and backing nuts to prevent pipe slipping or alignment migration.",
        images: [
          "/images/products/hardware-and-tools/u-clamp/1.jpg",
          "/images/products/hardware-and-tools/u-clamp/2.jpg",
          "/images/products/hardware-and-tools/u-clamp/3.jpg"
        ]
      }
    ]
  },
  {
    slug: "hose-box",
    title: "Hose Box",
    categories: [
      {
        name: "Hose Box",
        description: "Weather-proof outdoor safety enforcement single-door cabinet containment system designed to protect vital delivery canvas hoses and branch nozzles. Finished in high-visibility UV-resistant powder coat paint with durable internal ventilation louvers.",
        images: [
          "/images/products/hose-box/1.jpg",
            "/images/products/hose-box/2.jpg",
              "/images/products/hose-box/3.jpg",
                "/images/products/hose-box/4.jpg",
                  "/images/products/hose-box/5.jpg"
        ]
      }
    ]
  },
  {
    slug: "hose-reel-drum",
    title: "Hose Reel Drum",
    categories: [
      {
        name: "Swivel Wall Mounted Hose Reel",
        description: "Ergonomic 180-degree swing rotation industrial structural-grade fluid deployment system. Allows the operator to pull the heavy-duty thermoplastic hose seamlessly in any direction without risking kinks, blockages, or operational deployment tangles.",
        images: [
          "/images/products/hose-reel-drum/swivel-mount/1.jpg"
        ]
      }
    ]
  },
  {
    slug: "hydrant-spares",
    title: "Hydrant Spares",
    categories: [
      {
        name: "Hydrant Landing Valve Spares",
        description: "Comprehensive replacement structural seals, washers, brass gland packing assemblies, handwheels, and internal blank cap sets engineered to safely overhaul and maintain main fire hydrant landing valves to code.",
        images: [
          "/images/products/hydrant-spares/landing-valve-spares/1.jpg"
        ]
      }
    ]
  },
  {
    slug: "hydrant-valve",
    title: "Hydrant Valve",
    categories: [
      {
        name: "Oblique Landing Valve",
        description: "Corrosion-resistant certified configuration landing network hydrant valves machined from high-quality copper alloy. Designed for installation on wet risers to provide a reliable, controlled connection outlet for emergency canvas hose deployment.",
        images: [
          "/images/products/hydrant-valve/oblique/1.jpg"
        ]
      }
    ]
  },
  {
    slug: "ignitron",
    title: "IGNITRON",
    categories: [
      {
        name: "IGNITRON Processing Component",
        description: "Advanced heavy energy electrical current surge isolation and control system hardware module. Precision engineered for critical switching parameters in specialized, heavy-load industrial electrical frameworks requiring absolute arc control.",
        images: [
          "/images/products/ignitron/processing-module/1.jpg"
        ]
      }
    ]
  },
  {
    slug: "pa-system",
    title: "PA System",
    categories: [
      {
        name: "Pipe",
        description: "Heavy structural support integration containment conduit paths designed for organizing and shielding critical public address and emergency voice alarm audio cabling arrays from EMI interference and physical wear.",
        images: [
          "/images/products/pa-system/pipe/1.jpg"
        ]
      },
      {
        name: "M S Angle 35 x 35 x 5mm",
        description: "Precision profile 35x35x5mm mild steel supportive alignment mount frame structure. Hot-rolled to optimize structural tensile strength, providing reliable structural mounting foundations for equipment enclosures and speaker distributions.",
        images: [
          "/images/products/pa-system/ms-angle-35-35-5mm.jpg"
        ]
      },
      {
        name: "M S Angle 50 x 50 x 5mm",
        description: "Industrial specification reinforced 50x50x5mm profile load distribution framing angle hardware. Engineered to sustain heavier heavy equipment racks and overhead distributions requiring durable, weldable support frameworks.",
        images: [
          "/images/products/pa-system/ms-angle-50-50-5mm.jpg"
        ]
      }
    ]
  },
  {
    slug: "paint",
    title: "Paint",
    categories: [
      {
        name: "Industrial Signal Red Coating",
        description: "High-durability climate-specialized anti-corrosion signal red safety paint formulation. Specially engineered to offer extreme color retention, chemical resistance, and moisture protection across main fire pipelines, hydrants, and safety cabinets.",
        images: [
          "/images/products/paint/signal-red/1.jpg"
        ]
      }
    ]
  },
  {
    slug: "pressure-gauge",
    title: "Pressure Gauge",
    categories: [
      {
        name: "Analog Pressure Monitor Gauge",
        description: "High-scale dial indicator mechanism measuring real-time hydrostatic pressure drops inside vital lines. Features a durable stainless steel case and internal bourdon tube assembly to ensure highly reliable, damp-proof industrial readouts.",
        images: [
          "/images/products/pressure-gauge/analog-dial/1.jpg"
        ]
      }
    ]
  },
  {
    slug: "pressure-switch-danfoss-kp-36",
    title: "Pressure Switch (DANFOSS) KP 36",
    categories: [
      {
        name: "Pressure Switch (WIKA)",
        description: "WIKA alternative heavy fluid environment premium automated tracking array systems. Features a highly reliable electrical microswitch matrix designed to trigger automated jockey or main fire pumps based on critical line pressure changes.",
        images: [
          "/images/products/pressure-switch-danfoss-kp-36/pressure-switch-wika/1.jpg"
        ]
      },
      {
        name: "DANFOSS 2",
        description: "DANFOSS sequence 2 electronic pressure breaker layout system component. Features adjustable differential settings and high-load contact ratings to orchestrate multi-pump automated activation in modern industrial complexes.",
        images: [
          "/images/products/pressure-switch-danfoss-kp-36/danfoss-2.jpg"
        ]
      },
      {
        name: "DANFOSS 3",
        description: "DANFOSS sequence 3 heavy load automation activation layout design module. Engineered to operate flawlessly across high-frequency cycling systems, minimizing microswitch contact wear and maintaining strict pressure setpoint boundaries.",
        images: [
          "/images/products/pressure-switch-danfoss-kp-36/danfoss-3.jpg"
        ]
      },
      {
        name: "DANFOSS 4",
        description: "DANFOSS sequence 4 high-accuracy flow cutoff configuration model standard configuration. Features an IP-rated enclosure optimized for installation near pump manifolds where high ambient humidity and vibration parameters are common.",
        images: [
          "/images/products/pressure-switch-danfoss-kp-36/danfoss-4.jpg"
        ]
      },
      {
        name: "DANFOSS 5",
        description: "DANFOSS sequence 5 top capability factory production specification module element. Built for critical industrial automation tasks, offering ultra-fine dial calibrations for micro-pressure monitoring requirements.",
        images: [
          "/images/products/pressure-switch-danfoss-kp-36/danfoss-5.jpg"
        ]
      },
      {
        name: "Pressure Switch (DANFOSS) KP 36",
        description: "Genuine premium-tier DANFOSS KP 36 configuration automated safety pressure threshold trip framework. Industry recognized for its ultra-stable trip points, fail-safe bounce-free snap action switches, and easy maintenance profile.",
        images: [
          "/images/products/pressure-switch-danfoss-kp-36/pressure-switch-danfoss-kp36.jpg"
        ]
      }
    ]
  },
  {
    slug: "pumps",
    title: "Pumps",
    categories: [
      {
        name: "Main Fire Hydrant Pump",
        description: "High-capacity, high-volume multi-stage centrifugal fluid propulsion pump engine. Built with robust impellers and high-efficiency electric motors to deliver maximum flow rates and hydrostatic pressure headers into industrial safety pipe grids.",
        images: [
          "/images/products/pumps/main-hydrant-pump/1.jpg"
        ]
      }
    ]
  },
  {
    slug: "rubber-bellow",
    title: "Rubber Bellow",
    categories: [
      {
        name: "Flexible Pipe Expansion Joint Bellow",
        description: "Vibration-isolating, high-compression-resistant safety rubber pipeline structural connection. Designed to absorb thermal expansion movements, mechanical pipe shifts, and system acoustics, preventing structural stress on pump flanges.",
        images: [
          "/images/products/rubber-bellow/flexible-joint/1.jpg"
        ]
      }
    ]
  },
  {
    slug: "safety-items",
    title: "Safety Items",
    categories: [
      {
        name: "Personal Protective Fire Kit",
        description: "Comprehensive multi-piece safety kit containing high-thermal insulation aluminized suits, fire-resistant gloves, protective helmets, and tactical support tools engineered to shield emergency crews in extreme heat zones.",
        images: [
          "/images/products/safety-items/protective-kit/1.jpg"
        ]
      }
    ]
  },
  {
    slug: "sign-board",
    title: "Sign Board",
    categories: [
      {
        name: "Luminescent Emergency Signage",
        description: "High-visibility photo-luminescent green emergency exit tracking signage setup. Recharges via natural or ambient indoor luminescent sources, providing bright, continuous guidance visibility along exit routes during complete electrical blackouts.",
        images: [
          "/images/products/sign-board/luminescent-exit/1.jpg"
        ]
      }
    ]
  },
  {
    slug: "sprinkler",
    title: "Sprinkler",
    categories: [
      {
        name: "Alarm Valve",
        description: "Critical hydraulic check valve system designed to guide flow to automated water motor gongs while triggering electrical pressure monitors immediately upon the initiation of automated sprinkler discharge loops.",
        images: [
          "/images/products/sprinkler/alarm-valve/1.jpg"
        ]
      },
      {
        name: "Deluge Valve",
        description: "Fast-opening automatic hydraulic deluge valve system built for extensive open-head hazard configurations. Instantly floods entire designated zones with high-volume fire suppression layouts when triggered by pilot line detection panels.",
        images: [
          "/images/products/sprinkler/deluge-valve/1.jpg"
        ]
      },
      {
        name: "Flexible",
        description: "Stainless steel braided adjustable length sprinkler distribution drops designed for false ceiling architectures. Simplifies alignment tweaks while providing exceptional high-pressure structural containment and code compliance.",
        images: [
          "/images/products/sprinkler/flexible/1.jpg"
        ]
      },
      {
        name: "Rosette Plate",
        description: "Decorative clean finish protective wall trim plates designed to mask installation ceiling drop ports. Provides an architectural finish around recessed or pendent sprinkler heads while sealing core penetrations.",
        images: [
          "/images/products/sprinkler/rosette-plate/1.jpg"
        ]
      },
      {
        name: "Sprinkler Spares",
        description: "Comprehensive replacement catalog featuring thermal-sensitive replacement glass bulbs, chemical-grade seals, custom deflector shields, and protective cages engineered to keep fire sprinkler systems working efficiently.",
        images: [
          "/images/products/sprinkler/sprinkler-spares/1.jpg"
        ]
      }
    ]
  },
  {
    slug: "thermoplastic-hose",
    title: "Thermoplastic Hose",
    categories: [
      {
        name: "High Grade Thermoplastic Hose Layout",
        description: "Extremely flexible, kink-resistant chemical safety delivery hose featuring a multi-layered composite matrix. Engineered to maintain consistent flow rates and resist environmental cracking under severe external conditions.",
        images: [
          "/images/products/thermoplastic-hose/high-grade-hose/1.jpg"
        ]
      }
    ]
  },
  {
    slug: "u-clamp",
    title: "U Clamp",
    categories: [
      {
        name: "Reinforced Rigging U Clamp",
        description: "Heavy lock threaded base safety clamps designed specifically for high-load main ceiling installations. Features an extra thick profile to securely handle structural load-bearing requirements of heavy water-filled main header pipes.",
        images: [
          "/images/products/u-clamp/reinforced-rigging/1.jpg"
        ]
      }
    ]
  },
  {
    slug: "valves",
    title: "Valves",
    categories: [
      {
        name: "Air Release Valves",
        description: "Automated high-capacity pipeline air pocket safety elimination valves. Automatically vents pockets of entrapped air during pipeline filling and operations, preventing severe water hammer spikes and flow restrictions.",
        images: [
          "/images/products/valves/air-release-valves/1.jpg"
        ]
      },
      {
        name: "Ball Valves",
        description: "Quarter-turn fast activation structural flow control system ball valves. Features full-bore fluid paths to ensure unrestricted flow velocities along with absolute bidirectional bubble-tight shutoff reliability.",
        images: [
          "/images/products/valves/ball-valves/1.jpg"
        ]
      },
      {
        name: "Butterfly Valves",
        description: "Space-saving, lightweight gear-operated pipeline isolation wafer disc valves. Designed with resilient elastomer seats to guarantee absolute pressure containment with low operational turning torque requirements.",
        images: [
          "/images/products/valves/butterfly-valves/1.jpg"
        ]
      },
      {
        name: "Dual Plate NRV",
        description: "Compact dual-plate non-return check valves engineered to prevent backflow impacts across high-velocity layouts. Cylindrical spring-loaded plates enable swift closures, reducing system chatter and line damage risks.",
        images: [
          "/images/products/valves/dual-plate-nrv/1.jpg"
        ]
      },
      {
        name: "Foot Valve",
        description: "Heavy structural filter entry foot valves designed specifically for suction-lift piping ends. Prevents pump unpriming issues by keeping fluid columns securely retained within intake piping while screening debris.",
        images: [
          "/images/products/valves/foot-valve/1.jpg"
        ]
      },
      {
        name: "Non Return Valve Ball Type",
        description: "Self-cleaning ball mechanism path check systems preventing fluid fallback paths. Ideal for wastewater, viscous fluids, and chemical lines where traditional swinging discs could stick or foul up over time.",
        images: [
          "/images/products/valves/non-return-valve-ball-type/1.jpg"
        ]
      },
      {
        name: "Non Return Valve Flanged",
        description: "Heavy industrial bolt-fixed standard non-return direction flanged pipeline valves. Features a rugged internal swing-check plate engineered to offer long service lives on primary distribution lines.",
        images: [
          "/images/products/valves/non-return-valve-flanged/1.jpg"
        ]
      },
      {
        name: "Sluice Valve",
        description: "Resilient seated robust sliding wedge main water conduit control gate valves. Built to sustain high pressure headers, providing long-term service with minimum frictional resistance when fully opened.",
        images: [
          "/images/products/valves/sluice-valve/1.jpg"
        ]
      },
      {
        name: "Strainer",
        description: "Y-pattern pipe network inline structural debris collection filter strainers. Outfitted with high-density stainless steel mesh screens to capture line scale and welding slag, protecting down-line control valves.",
        images: [
          "/images/products/valves/strainer/1.jpg"
        ]
      },
      {
        name: "Wafer NRV",
        description: "Ultra-thin profile, easy-mount, space-saving inline pipeline backflow non-return check valves. Fits securely between standard matching flanges, providing a lightweight flow prevention solution.",
        images: [
          "/images/products/valves/wafer-nrv/1.jpg"
        ]
      }
    ]
  },
  {
    slug: "wrapping-coating-material",
    title: "Wrapping Coating Material",
    categories: [
      {
        name: "Anti Corrosion Wrapping Tape",
        description: "Heavy anti-moisture external underground steel pipeline defensive shielding layers. Provides an impenetrable cross-linked chemical and dielectric barrier protecting buried infrastructure from soil stress and galvanic corrosion paths.",
        images: [
          "/images/products/wrapping-coating-material/anti-corrosion-tape/1.jpg"
        ]
      }
    ]
  },
  {
    slug: "other",
    title: "Other",
    categories: [
      {
        name: "Miscellaneous System Spares",
        description: "Custom specialized framework system components and tailored project order safety fittings built to match niche architectural blueprints and specific technical plant requirements.",
        images: [
          "/images/products/other/miscellaneous-spares/1.jpg"
        ]
      }
    ]
  }
];

export default productsData;