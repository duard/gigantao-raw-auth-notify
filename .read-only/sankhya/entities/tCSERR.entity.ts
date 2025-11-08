import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCSERR', ['coderro'], { unique: true })
@Entity('TCSERR', { schema: 'SANKHYA' })
export class TcserrEntity {
  @Column('int', { primary: true, name: 'CODERRO' })
  coderro: number;

  @Column('char', { name: 'ASSUNTO', length: 40 })
  assunto: string;

  @Column('text', { name: 'DESCRICAO' })
  descricao: string;

  @Column('text', { name: 'SOLUCAO' })
  solucao: string;

  @Column('datetime', { name: 'DTCAD', nullable: true })
  dtcad: Date | null;

  @Column('datetime', { name: 'DTATUAL' })
  dtatual: Date;

  @Column('char', { name: 'STATUS', length: 1, default: () => "'N'" })
  status: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcserrs)
  @JoinColumn([{ name: 'CODUSUATUAL', referencedColumnName: 'codusu' }])
  codusuatual: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcserrs2)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcserrs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}
