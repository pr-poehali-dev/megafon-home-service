import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCallbackDialogOpen, setIsCallbackDialogOpen] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState("");
  const [formData, setFormData] = useState({ name: "", phone: "", address: "" });
  const [callbackFormData, setCallbackFormData] = useState({ name: "", phone: "", address: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCallbackSubmitted, setIsCallbackSubmitted] = useState(false);

  const handleConnectClick = (tariffName: string) => {
    setSelectedTariff(tariffName);
    setIsDialogOpen(true);
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", { tariff: selectedTariff, ...formData });
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", address: "" });
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setIsSubmitted(false);
  };

  const handleCallbackSubmit = () => {
    console.log("Callback request:", callbackFormData);
    setIsCallbackSubmitted(true);
    setCallbackFormData({ name: "", phone: "", address: "" });
  };

  const handleCloseCallbackDialog = () => {
    setIsCallbackDialogOpen(false);
    setIsCallbackSubmitted(false);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const tariffs = [
    {
      name: "Турбо",
      speed: "500 Мбит/с",
      price: "275",
      regularPrice: "550",
      priceNote: "первые 2 месяца",
      features: ["Интернет 500 Мбит/с", "Аренда Wi-Fi роутера", "Техподдержка 24/7"],
      popular: false,
    },
    {
      name: "Для домов всё",
      speed: "300 Мбит/с",
      price: "325",
      regularPrice: "650",
      priceNote: "первые 2 месяца",
      features: ["Интернет 300 Мбит/с", "180 ТВ-каналов", "Аренда Wi-Fi роутера", "Техподдержка 24/7"],
      popular: true,
    },
    {
      name: "Мега тариф",
      speed: "500 Мбит/с",
      price: "735",
      features: ["Интернет 500 Мбит/с", "250 ТВ-каналов", "800 минут мобильной связи", "Аренда Wi-Fi роутера", "Техподдержка 24/7"],
      popular: false,
    },
    {
      name: "Семейный",
      speed: "500 Мбит/с",
      price: "910",
      priceNote: "навсегда",
      features: ["Интернет 500 Мбит/с", "250 ТВ-каналов", "3 SIM-карты", "1700 минут на всех", "Аренда Wi-Fi роутера", "Техподдержка 24/7"],
      popular: false,
    },
  ];

  const offers = [
    {
      title: "Интернет + ТВ",
      discount: "до 30%",
      description: "При подключении пакета интернет + ТВ",
      icon: "Tv",
    },
    {
      title: "Приведи друга",
      discount: "1 месяц",
      description: "Бесплатный интернет за каждого друга",
      icon: "Users",
    },
    {
      title: "Переход с другого оператора",
      discount: "3 месяца",
      description: "Скидка 50% при переходе от конкурентов",
      icon: "Zap",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Оставьте заявку",
      description: "Позвоните или заполните форму на сайте",
      icon: "Phone",
    },
    {
      number: "02",
      title: "Проверка адреса",
      description: "Мы проверим возможность подключения",
      icon: "MapPin",
    },
    {
      number: "03",
      title: "Выбор тарифа",
      description: "Подберём оптимальное предложение",
      icon: "Package",
    },
    {
      number: "04",
      title: "Подключение",
      description: "Мастер приедет в удобное время",
      icon: "CheckCircle2",
    },
  ];

  const faqs = [
    {
      question: "Как быстро можно подключить интернет?",
      answer: "Обычно подключение занимает от 1 до 3 рабочих дней после подачи заявки. В некоторых случаях возможно подключение в день обращения.",
    },
    {
      question: "Какое оборудование нужно для подключения?",
      answer: "Мы предоставляем всё необходимое оборудование: оптический терминал и Wi-Fi роутер. Никаких дополнительных покупок не требуется.",
    },
    {
      question: "Можно ли сменить тариф после подключения?",
      answer: "Да, вы можете в любой момент изменить тариф через личный кабинет или позвонив в службу поддержки. Смена тарифа происходит бесплатно.",
    },
    {
      question: "Что делать если пропал интернет?",
      answer: "Сначала попробуйте перезагрузить роутер. Если это не помогло, обратитесь в техподдержку по телефону 8-800-550-05-00 (звонок бесплатный).",
    },
    {
      question: "Есть ли скрытые платежи?",
      answer: "Нет, все условия прозрачны. Вы платите только указанную абонентскую плату. Подключение и настройка оборудования бесплатны.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.poehali.dev/files/2616f908-ee40-4416-9851-6cf0b19625a3.png" 
                alt="МегаФон" 
                className="h-14 w-14 md:h-16 md:w-16 object-contain"
              />
              <span className="text-2xl md:text-3xl font-bold text-primary">МегаФон</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection("tariffs")} className="text-sm font-medium hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection("how-to")} className="text-sm font-medium hover:text-primary transition-colors">
                Как подключить
              </button>
              <button onClick={() => scrollToSection("offers")} className="text-sm font-medium hover:text-primary transition-colors">
                Акции
              </button>
              <button onClick={() => scrollToSection("contacts")} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection("privacy")} className="text-sm font-medium hover:text-primary transition-colors">
                Политика
              </button>
            </nav>

            <Button size="lg" className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              8-995-150-88-33
            </Button>

            <Button size="icon" variant="default" className="md:hidden" onClick={() => window.location.href='tel:89951508833'}>
              <Icon name="Phone" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-12 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <Badge className="bg-secondary text-white hover:bg-secondary/90">Официальный дилер</Badge>
              <h1 className="text-3xl md:text-6xl font-bold leading-tight">
                Домашний интернет и ТВ от <span className="text-primary">МегаФон</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                Высокоскоростной интернет до 500 Мбит/с и 300+ ТВ-каналов
              </p>
              <div className="flex flex-col gap-3">
                <Button size="lg" className="text-base md:text-lg px-6 w-full sm:w-auto" onClick={() => scrollToSection("tariffs")}>
                  Выбрать тариф
                </Button>
                <Button size="lg" variant="outline" className="text-base px-4 w-full sm:w-auto flex items-center justify-center" onClick={() => window.location.href='tel:89951508833'}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  <span className="flex flex-col items-start">
                    <span className="text-xs">Получить консультацию</span>
                    <span className="font-semibold">8-995-150-88-33</span>
                  </span>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-3 md:p-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Wifi" className="text-primary" size={20} />
                  </div>
                  <CardTitle className="text-base md:text-lg">До 500 Мбит/с</CardTitle>
                  <CardDescription className="text-xs md:text-sm">Скорость интернета</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-3 md:p-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Tv" className="text-secondary" size={20} />
                  </div>
                  <CardTitle className="text-base md:text-lg">300+ каналов</CardTitle>
                  <CardDescription className="text-xs md:text-sm">ТВ в HD качестве</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-3 md:p-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Clock" className="text-primary" size={20} />
                  </div>
                  <CardTitle className="text-base md:text-lg">1-3 дня</CardTitle>
                  <CardDescription className="text-xs md:text-sm">Быстрое подключение</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-3 md:p-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Shield" className="text-secondary" size={20} />
                  </div>
                  <CardTitle className="text-base md:text-lg">24/7</CardTitle>
                  <CardDescription className="text-xs md:text-sm">Техподдержка</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">Тарифы интернета и ТВ</h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите оптимальный тариф для вашего дома
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all ${tariff.popular ? 'border-primary border-2 scale-105' : ''}`}>
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-secondary text-white px-4 py-1">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-3 md:pb-4 p-4 md:p-6">
                  <CardTitle className="text-lg md:text-2xl mb-2">{tariff.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
                    <Icon name="Gauge" className="text-primary" size={24} />
                    <span className="text-xl md:text-3xl font-bold text-primary">{tariff.speed}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-2xl md:text-4xl font-bold">{tariff.price} ₽</span>
                      <span className="text-muted-foreground text-sm">/мес</span>
                    </div>
                    {tariff.priceNote && (
                      <div className="text-xs md:text-sm text-muted-foreground">{tariff.priceNote}</div>
                    )}
                    {tariff.regularPrice && (
                      <div className="text-xs md:text-sm text-muted-foreground">далее {tariff.regularPrice} ₽/мес</div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 md:space-y-3 p-4 md:p-6">
                  {tariff.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-xs md:text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className="w-full mt-4 md:mt-6 text-sm md:text-base" 
                    variant={tariff.popular ? "default" : "outline"}
                    onClick={() => handleConnectClick(tariff.name)}
                  >
                    Подключить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-to" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Как подключить интернет</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Простой процесс подключения за 4 шага
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Icon name={step.icon as any} className="text-white" size={24} />
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardHeader>
                </Card>
                {index < steps.length - 1 && (
                  <Icon name="ArrowRight" className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 text-primary" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" className="py-12 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Специальные предложения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Дополнительные выгоды для наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {offers.map((offer, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow bg-white">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={offer.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl mb-3">{offer.title}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">{offer.discount}</div>
                  <CardDescription className="text-base">{offer.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Контакты дилера</h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами удобным способом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Телефон</CardTitle>
                      <CardDescription className="text-base space-y-1">
                        <div className="font-semibold text-foreground text-lg">8-995-150-88-33</div>
                        <div>Консультации и подключение</div>
                        <div>Ежедневно с 8:00 до 22:00</div>
                        <div className="font-semibold text-foreground text-base mt-2">8-800-550-05-00</div>
                        <div>Техподдержка 24/7 (бесплатно)</div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>



              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Мессенджеры</CardTitle>
                      <CardDescription className="text-base space-y-1">
                        <div className="font-semibold text-foreground text-lg">8-995-150-88-33</div>
                        <div>WhatsApp / Telegram</div>
                        <div>Консультации и подключение</div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Email</CardTitle>
                      <CardDescription className="text-base space-y-1">
                        <div className="font-semibold text-foreground">info@megafon-dealer.ru</div>
                        <div>Ответим в течение 1 часа</div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <Card className="mt-8 bg-gradient-to-br from-primary to-secondary text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2 text-white">Оставьте заявку</CardTitle>
                <CardDescription className="text-white/90 mb-6">
                  Мы перезвоним в течение 15 минут и подберём лучший тариф
                </CardDescription>
                <Button size="lg" variant="secondary" className="mx-auto" onClick={() => setIsCallbackDialogOpen(true)}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-lg text-muted-foreground">
                Ответы на популярные вопросы о подключении
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="privacy" className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Политика конфиденциальности</h2>
            </div>

            <Card className="bg-white">
              <CardContent className="prose prose-sm max-w-none pt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">1. Общие положения</h3>
                  <p className="text-muted-foreground">
                    Настоящая Политика конфиденциальности персональных данных действует в отношении всей информации, 
                    которую данный сайт может получить о Пользователе во время использования сайта.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">2. Сбор персональных данных</h3>
                  <p className="text-muted-foreground mb-2">
                    Персональные данные Пользователя (имя, телефон, email) собираются при:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Заполнении форм обратной связи</li>
                    <li>Оформлении заявки на подключение услуг</li>
                    <li>Обращении в службу поддержки</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">3. Цели обработки персональных данных</h3>
                  <p className="text-muted-foreground mb-2">
                    Персональные данные используются для:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Связи с Пользователем для консультации и оформления услуг</li>
                    <li>Предоставления информации о тарифах и специальных предложениях</li>
                    <li>Технической поддержки и решения возникающих проблем</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">4. Защита персональных данных</h3>
                  <p className="text-muted-foreground">
                    Мы применяем организационные и технические меры для защиты персональных данных от 
                    несанкционированного доступа, изменения, раскрытия или уничтожения.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">5. Передача данных третьим лицам</h3>
                  <p className="text-muted-foreground">
                    Персональные данные могут быть переданы только официальным партнёрам МегаФон для 
                    обработки заявок на подключение услуг. Мы не передаём данные третьим лицам в 
                    коммерческих целях без согласия Пользователя.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">6. Права пользователя</h3>
                  <p className="text-muted-foreground mb-2">
                    Пользователь имеет право:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Получать информацию о хранящихся персональных данных</li>
                    <li>Требовать уточнения, блокирования или удаления данных</li>
                    <li>Отозвать согласие на обработку персональных данных</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">7. Контактная информация</h3>
                  <p className="text-muted-foreground">
                    По вопросам обработки персональных данных обращайтесь:<br/>
                    Email: info@megafon-dealer.ru<br/>
                    Телефон: 8-995-150-88-33
                  </p>
                </div>

                <div className="text-sm text-muted-foreground pt-4 border-t">
                  <p>Дата последнего обновления: 27 октября 2024 года</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <span className="text-xl font-bold">МегаФон</span>
              </div>
              <p className="text-sm text-white/70">
                Официальный дилер МегаФон по продаже домашнего интернета и ТВ
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><button onClick={() => scrollToSection("tariffs")} className="hover:text-white transition-colors">Тарифы</button></li>
                <li><button onClick={() => scrollToSection("how-to")} className="hover:text-white transition-colors">Как подключить</button></li>
                <li><button onClick={() => scrollToSection("offers")} className="hover:text-white transition-colors">Акции</button></li>
                <li><button onClick={() => scrollToSection("faq")} className="hover:text-white transition-colors">FAQ</button></li>
                <li><button onClick={() => scrollToSection("privacy")} className="hover:text-white transition-colors">Политика конфиденциальности</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>8-995-150-88-33</li>
                <li>info@megafon-dealer.ru</li>
                <li>WhatsApp / Telegram</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Режим работы</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Консультации: 8:00-22:00</li>
                <li>Ежедневно</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Техподдержка</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>8-800-550-05-00</li>
                <li>Бесплатно по России</li>
                <li>Круглосуточно 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>© 2024 МегаФон. Все права защищены. Официальный дилер.</p>
          </div>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-md">
          {!isSubmitted ? (
            <>
              <DialogHeader>
                <DialogTitle>Подключить тариф "{selectedTariff}"</DialogTitle>
                <DialogDescription>
                  Выберите удобный способ подключения
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold">Оставить заявку</h4>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <Input
                    placeholder="Телефон"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <Input
                    placeholder="Адрес подключения"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                  <Button 
                    className="w-full" 
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.phone || !formData.address}
                  >
                    Отправить заявку
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">или</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold">Позвонить сейчас</h4>
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => window.location.href='tel:89951508833'}
                  >
                    <Icon name="Phone" size={20} className="mr-2" />
                    8-995-150-88-33
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  Заявка принята
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <p className="text-center text-muted-foreground">
                  Благодарим за вашу заявку на подключение тарифа "{selectedTariff}".
                </p>
                <p className="text-center">
                  Наш специалист свяжется с вами в ближайшее время для уточнения деталей.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" className="text-primary" size={16} />
                    <span>Время ожидания: 15-30 минут</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Phone" className="text-primary" size={16} />
                    <span>Телефон: 8-995-150-88-33</span>
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button onClick={handleCloseDialog} className="w-full">
                  Закрыть
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isCallbackDialogOpen} onOpenChange={handleCloseCallbackDialog}>
        <DialogContent className="sm:max-w-md">
          {!isCallbackSubmitted ? (
            <>
              <DialogHeader>
                <DialogTitle>Заказать обратный звонок</DialogTitle>
                <DialogDescription>
                  Оставьте свои контактные данные, и наш специалист перезвонит вам в течение 15 минут
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={callbackFormData.name}
                  onChange={(e) => setCallbackFormData({ ...callbackFormData, name: e.target.value })}
                />
                <Input
                  placeholder="Телефон"
                  type="tel"
                  value={callbackFormData.phone}
                  onChange={(e) => setCallbackFormData({ ...callbackFormData, phone: e.target.value })}
                />
                <Input
                  placeholder="Адрес подключения (необязательно)"
                  value={callbackFormData.address}
                  onChange={(e) => setCallbackFormData({ ...callbackFormData, address: e.target.value })}
                />
              </div>

              <DialogFooter>
                <Button 
                  className="w-full" 
                  onClick={handleCallbackSubmit}
                  disabled={!callbackFormData.name || !callbackFormData.phone}
                >
                  Оставить заявку
                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={24} />
                  Заявка принята
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <p className="text-center text-muted-foreground">
                  Благодарим за обращение!
                </p>
                <p className="text-center">
                  Наш специалист свяжется с вами в ближайшее время для консультации по подключению и выбору оптимального тарифа.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" className="text-primary" size={16} />
                    <span>Время ожидания: 15-30 минут</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Phone" className="text-primary" size={16} />
                    <span>Телефон: 8-995-150-88-33</span>
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button onClick={handleCloseCallbackDialog} className="w-full">
                  Закрыть
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;