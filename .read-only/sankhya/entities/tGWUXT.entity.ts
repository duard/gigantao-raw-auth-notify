import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwtarEntity } from './tGWTAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGWUXT', ['codusuexec', 'tiptarefa', 'chave'], { unique: true })
@Index('TGWUXT_I01', ['nutarefa'], {})
@Index('TGWUXT_I02', ['codusuexec', 'sittarefa'], {})
@Entity('TGWUXT', { schema: 'SANKHYA' })
export class TgwuxtEntity {
  @Column('smallint', { primary: true, name: 'CODUSUEXEC' })
  codusuexec: number;

  @Column('int', { name: 'NUTAREFA', nullable: true })
  nutarefa: number | null;

  @Column('varchar', { name: 'SITTAREFA', nullable: true, length: 1 })
  sittarefa: string | null;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('char', {
    primary: true,
    name: 'TIPTAREFA',
    length: 1,
    default: () => "'R'",
  })
  tiptarefa: string;

  @Column('int', { primary: true, name: 'CHAVE' })
  chave: number;

  @ManyToOne(() => TgwtarEntity, (tgwtarEntity) => tgwtarEntity.tgwuxts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUTAREFA', referencedColumnName: 'nutarefa' }])
  nutarefa2: TgwtarEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwuxts)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwuxts2)
  @JoinColumn([{ name: 'CODUSUEXEC', referencedColumnName: 'codusu' }])
  codusuexec2: TsiusuEntity;
}
