import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfnatpcEntity } from './tGFNATPC.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFNATPCEMP', ['nunatpiscof', 'codemp'], { unique: true })
@Entity('TGFNATPCEMP', { schema: 'SANKHYA' })
export class TgfnatpcempEntity {
  @Column('int', { primary: true, name: 'NUNATPISCOF' })
  nunatpiscof: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(
    () => TgfnatpcEntity,
    (tgfnatpcEntity) => tgfnatpcEntity.tgfnatpcemps,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'NUNATPISCOF', referencedColumnName: 'nunatpiscof' }])
  nunatpiscof2: TgfnatpcEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfnatpcemps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfnatpcemps)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
