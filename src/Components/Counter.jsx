import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const counterStyle =
    'flex flex-col gap-3 text-center text-2xl font-bold text-white md:text-5xl';
  const textCounterStyle =
    'font-exo text-sm md:text-md lg:text-lg font-normal md:text-lg';

  return (
    <div
      ref={ref}
      className="my-12 grid h-[120px] grid-cols-3 place-content-center place-items-center bg-rose-800 text-xl"
    >
      {inView && (
        <div className={counterStyle}>
          <CountUp end={12} duration={6} separator="," prefix="+" />
          <p className={textCounterStyle}>Años de experiencia</p>
        </div>
      )}
      {inView && (
        <div className={counterStyle}>
          <CountUp end={100} duration={3} separator="," prefix="+" />
          <p className={textCounterStyle}>Pacientes satisfechos</p>
        </div>
      )}
      {inView && (
        <div className={counterStyle}>
          <CountUp end={700} duration={3} separator="," prefix="+" />
          <p className={textCounterStyle}>Productos vendidos</p>
        </div>
      )}
    </div>
  );
};

export default Counter;
