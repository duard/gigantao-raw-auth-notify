import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsslnEntity } from './tCSSLN.entity';
import { TmdconEntity } from './tMDCON.entity';

@Index('PK_TCSSDN', ['nusla', 'numreg', 'seqnotifica', 'seqdest'], {
  unique: true,
})
@Entity('TCSSDN', { schema: 'SANKHYA' })
export class TcssdnEntity {
  @Column('int', { primary: true, name: 'NUSLA' })
  nusla: number;

  @Column('smallint', { primary: true, name: 'NUMREG' })
  numreg: number;

  @Column('smallint', { primary: true, name: 'SEQNOTIFICA' })
  seqnotifica: number;

  @Column('smallint', { primary: true, name: 'SEQDEST' })
  seqdest: number;

  @Column('char', { name: 'TIPODEST', length: 1 })
  tipodest: string;

  @ManyToOne(() => TcsslnEntity, (tcsslnEntity) => tcsslnEntity.tcssdns)
  @JoinColumn([
    { name: 'NUSLA', referencedColumnName: 'nusla' },
    { name: 'NUMREG', referencedColumnName: 'numreg' },
    { name: 'SEQNOTIFICA', referencedColumnName: 'seqnotifica' },
  ])
  tcssln: TcsslnEntity;

  @ManyToOne(() => TmdconEntity, (tmdconEntity) => tmdconEntity.tcssdns)
  @JoinColumn([{ name: 'CODCON', referencedColumnName: 'codcon' }])
  codcon: TmdconEntity;
}
