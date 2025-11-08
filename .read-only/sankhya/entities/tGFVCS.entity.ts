import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFVCS', ['codorig', 'codprodsug'], { unique: true })
@Entity('TGFVCS', { schema: 'SANKHYA' })
export class TgfvcsEntity {
  @Column('int', { primary: true, name: 'CODORIG' })
  codorig: number;

  @Column('varchar', {
    name: 'TIPORIG',
    nullable: true,
    length: 1,
    default: () => "'P'",
  })
  tiporig: string | null;

  @Column('int', { primary: true, name: 'CODPRODSUG' })
  codprodsug: number;

  @Column('float', {
    name: 'QTDSUGERIDA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdsugerida: number | null;

  @Column('varchar', {
    name: 'MULTQTD',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  multqtd: string | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfvcs)
  @JoinColumn([{ name: 'CODPRODSUG', referencedColumnName: 'codprod' }])
  codprodsug2: TgfproEntity;
}
