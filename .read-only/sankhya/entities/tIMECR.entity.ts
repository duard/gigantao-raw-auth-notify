import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimeprEntity } from './tIMEPR.entity';

@Index('PK_TIMECR', ['ecrempreendimento', 'ecrreferencia', 'ecrtipo'], {
  unique: true,
})
@Entity('TIMECR', { schema: 'SANKHYA' })
export class TimecrEntity {
  @Column('int', { primary: true, name: 'ECREMPREENDIMENTO' })
  ecrempreendimento: number;

  @Column('datetime', { primary: true, name: 'ECRREFERENCIA' })
  ecrreferencia: Date;

  @Column('varchar', { primary: true, name: 'ECRTIPO', length: 3 })
  ecrtipo: string;

  @Column('float', { name: 'ECRVALOR', precision: 53 })
  ecrvalor: number;

  @Column('char', { name: 'ECRLEGADO', nullable: true, length: 1 })
  ecrlegado: string | null;

  @ManyToOne(() => TimeprEntity, (timeprEntity) => timeprEntity.timecrs)
  @JoinColumn([
    { name: 'ECREMPREENDIMENTO', referencedColumnName: 'eprcodigo' },
  ])
  ecrempreendimento2: TimeprEntity;
}
