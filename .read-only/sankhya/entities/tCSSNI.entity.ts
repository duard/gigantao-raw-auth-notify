import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsslnEntity } from './tCSSLN.entity';

@Index('PK_TCSSNI', ['nusla', 'numreg', 'seqnotifica', 'numos', 'numitem'], {
  unique: true,
})
@Index('TCSSNI_I01', ['numos', 'numitem'], {})
@Entity('TCSSNI', { schema: 'SANKHYA' })
export class TcssniEntity {
  @Column('int', { primary: true, name: 'NUSLA' })
  nusla: number;

  @Column('smallint', { primary: true, name: 'NUMREG' })
  numreg: number;

  @Column('smallint', { primary: true, name: 'SEQNOTIFICA' })
  seqnotifica: number;

  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('smallint', { primary: true, name: 'NUMITEM' })
  numitem: number;

  @Column('datetime', { name: 'DHULTPOSTAGEM' })
  dhultpostagem: Date;

  @ManyToOne(() => TcsslnEntity, (tcsslnEntity) => tcsslnEntity.tcssnis)
  @JoinColumn([
    { name: 'NUSLA', referencedColumnName: 'nusla' },
    { name: 'NUMREG', referencedColumnName: 'numreg' },
    { name: 'SEQNOTIFICA', referencedColumnName: 'seqnotifica' },
  ])
  tcssln: TcsslnEntity;
}
