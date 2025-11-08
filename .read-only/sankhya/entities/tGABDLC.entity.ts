import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgadigEntity } from './tGADIG.entity';

@Index('PK_TGABDLC', ['codproj', 'sequencia'], { unique: true })
@Entity('TGABDLC', { schema: 'SANKHYA' })
export class TgabdlcEntity {
  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('char', { name: 'BLOQUEAR', length: 1 })
  bloquear: string;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgabdlcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgabdlcs)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;

  @ManyToOne(() => TgadigEntity, (tgadigEntity) => tgadigEntity.tgabdlcs)
  @JoinColumn([
    { name: 'NUDIG', referencedColumnName: 'nudig' },
    { name: 'TIPO', referencedColumnName: 'tipo' },
  ])
  tgadig: TgadigEntity;
}
