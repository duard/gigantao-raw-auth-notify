import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbhisEntity } from './tCBHIS.entity';
import { TcbfctEntity } from './tCBFCT.entity';

@Index('PK_TCBHFC', ['codemp', 'codfatocontb', 'codhistctb'], { unique: true })
@Entity('TCBHFC', { schema: 'SANKHYA' })
export class TcbhfcEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'CODFATOCONTB', length: 30 })
  codfatocontb: string;

  @Column('smallint', { primary: true, name: 'CODHISTCTB' })
  codhistctb: number;

  @ManyToOne(() => TcbhisEntity, (tcbhisEntity) => tcbhisEntity.tcbhfcs)
  @JoinColumn([{ name: 'CODHISTCTB', referencedColumnName: 'codhistctb' }])
  codhistctb2: TcbhisEntity;

  @ManyToOne(() => TcbfctEntity, (tcbfctEntity) => tcbfctEntity.tcbhfcs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFATOCONTB', referencedColumnName: 'codfatocontb' },
  ])
  tcbfct: TcbfctEntity;
}
