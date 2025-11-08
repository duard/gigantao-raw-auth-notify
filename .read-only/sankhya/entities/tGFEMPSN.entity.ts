import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfpsnEntity } from './tGFPSN.entity';

@Index('PK_TGFEMPSN', ['codemp', 'dtref', 'nupartilha'], { unique: true })
@Entity('TGFEMPSN', { schema: 'SANKHYA' })
export class TgfempsnEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('int', { primary: true, name: 'NUPARTILHA' })
  nupartilha: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('float', { name: 'VLRRECEITABRUTA', nullable: true, precision: 53 })
  vlrreceitabruta: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfempsns)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfempsns)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfpsnEntity, (tgfpsnEntity) => tgfpsnEntity.tgfempsns)
  @JoinColumn([{ name: 'NUPARTILHA', referencedColumnName: 'nupartilha' }])
  nupartilha2: TgfpsnEntity;
}
