import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsictaEntity } from './tSICTA.entity';

@Index('PK_TGFCBS', ['codctabcoint', 'cepini', 'cepfim'], { unique: true })
@Entity('TGFCBS', { schema: 'SANKHYA' })
export class TgfcbsEntity {
  @Column('smallint', { primary: true, name: 'CODCTABCOINT' })
  codctabcoint: number;

  @Column('varchar', { primary: true, name: 'CEPINI', length: 8 })
  cepini: string;

  @Column('varchar', { primary: true, name: 'CEPFIM', length: 8 })
  cepfim: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfcbs)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint2: TsictaEntity;
}
