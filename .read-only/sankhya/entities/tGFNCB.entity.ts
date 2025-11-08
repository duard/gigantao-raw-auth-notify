import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsictaEntity } from './tSICTA.entity';
import { TgfnatEntity } from './tGFNAT.entity';

@Index('PK_TGFNCB', ['codnat', 'codctabcoint'], { unique: true })
@Entity('TGFNCB', { schema: 'SANKHYA' })
export class TgfncbEntity {
  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('smallint', { primary: true, name: 'CODCTABCOINT' })
  codctabcoint: number;

  @Column('int', { name: 'REMBCO', default: () => '(0)' })
  rembco: number;

  @Column('int', { name: 'REMFINAL', default: () => '(0)' })
  remfinal: number;

  @Column('float', { name: 'CONVENIO', nullable: true, precision: 53 })
  convenio: number | null;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfncbs)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint2: TsictaEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfncbs)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;
}
