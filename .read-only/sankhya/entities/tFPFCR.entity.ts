import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcacurEntity } from './tCACUR.entity';
import { TfpfcoEntity } from './tFPFCO.entity';

@Index('PK_TFPFCR', ['codfuncao', 'codcur'], { unique: true })
@Entity('TFPFCR', { schema: 'SANKHYA' })
export class TfpfcrEntity {
  @Column('int', { primary: true, name: 'CODFUNCAO' })
  codfuncao: number;

  @Column('char', { primary: true, name: 'CODCUR', length: 15 })
  codcur: string;

  @Column('smallint', { name: 'PERCAPROV', nullable: true })
  percaprov: number | null;

  @Column('smallint', { name: 'PERCREVISAO', nullable: true })
  percrevisao: number | null;

  @ManyToOne(() => TcacurEntity, (tcacurEntity) => tcacurEntity.tfpfcrs)
  @JoinColumn([{ name: 'CODCUR', referencedColumnName: 'codcur' }])
  codcur2: TcacurEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.tfpfcrs)
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao2: TfpfcoEntity;
}
