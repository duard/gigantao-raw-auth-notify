import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfeppEntity } from './tGFEPP.entity';
import { TgfvolEntity } from './tGFVOL.entity';

@Index('PK_TGFMSI', ['numeq', 'codserv', 'sequencia', 'codprod'], {
  unique: true,
})
@Entity('TGFMSI', { schema: 'SANKHYA' })
export class TgfmsiEntity {
  @Column('int', { primary: true, name: 'NUMEQ' })
  numeq: number;

  @Column('int', { primary: true, name: 'CODSERV' })
  codserv: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('float', { name: 'QTDE', nullable: true, precision: 53 })
  qtde: number | null;

  @Column('varchar', { name: 'OPCIONAL', nullable: true, length: 1 })
  opcional: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfmsis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfeppEntity, (tgfeppEntity) => tgfeppEntity.tgfmsis)
  @JoinColumn([
    { name: 'CODSERV', referencedColumnName: 'codprod' },
    { name: 'NUMEQ', referencedColumnName: 'numeq' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfepp: TgfeppEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfmsis)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;
}
