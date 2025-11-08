import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TMSCONFUNI', ['chave', 'codemp'], { unique: true })
@Entity('TMSCONFUNI', { schema: 'SANKHYA' })
export class TmsconfuniEntity {
  @Column('int', { primary: true, name: 'CHAVE' })
  chave: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tmsconfunis)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}
