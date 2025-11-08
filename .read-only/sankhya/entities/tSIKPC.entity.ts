import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSIKPC', ['nukeep'], { unique: true })
@Index('TSIKPC_I01', ['keepid'], {})
@Entity('TSIKPC', { schema: 'SANKHYA' })
export class TsikpcEntity {
  @Column('int', { primary: true, name: 'NUKEEP' })
  nukeep: number;

  @Column('varchar', { name: 'KEEPID', length: 40 })
  keepid: string;

  @Column('varchar', { name: 'INTERNO', length: 32 })
  interno: string;

  @Column('datetime', { name: 'DTVALIDADE' })
  dtvalidade: Date;

  @Column('varchar', { name: 'APARELHO', nullable: true, length: 50 })
  aparelho: string | null;

  @Column('varchar', { name: 'APARELHOID', nullable: true, length: 200 })
  aparelhoid: string | null;

  @Column('varchar', { name: 'APPNAME', nullable: true, length: 20 })
  appname: string | null;

  @Column('char', { name: 'APS', nullable: true, length: 1 })
  aps: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsikpcs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
